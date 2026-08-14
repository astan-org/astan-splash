"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Point {
  x: number;
  y: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  born: number;
}

interface Rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CELL_SIZE = 55;
const INFLUENCE_RADIUS = 260;
const MAX_WARP = 24;
const DOT_SPACING = 28;
const LERP_SPEED = 0.08;
const MAX_RIPPLES = 12;

const NODE_BASE_RADIUS = 1.8;
const NODE_ACTIVE_RADIUS = 3.2;

/* Brand palette. The upstream component ships blue (#4A9EFF) on near-black
   (#161618) with pure white lines — none of which exist in the Astan palette,
   which is Ink / Bone / Teal only and permits no pure white or black on screen.
   Lines and idle nodes are Bone at low alpha; actives are Teal Soft, which
   carries on an Ink ground where Teal itself would not. */
const LINE_BASE: Rgba = { r: 237, g: 230, b: 214, a: 0.1 }; // Bone
const NODE_IDLE: Rgba = { r: 237, g: 230, b: 214, a: 0.18 }; // Bone

const THEMES = {
  default: {
    lineActive: { r: 95, g: 151, b: 166, a: 0.9 } as Rgba, // Teal Soft
    nodeActive: { r: 95, g: 151, b: 166, a: 1 } as Rgba,
    accent: "95,151,166",
  },
  monochrome: {
    lineActive: { r: 237, g: 230, b: 214, a: 0.9 } as Rgba, // Bone
    nodeActive: { r: 237, g: 230, b: 214, a: 1 } as Rgba,
    accent: "237,230,214",
  },
};

type KineticGridTheme = keyof typeof THEMES;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerpN(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(base: Rgba, active: Rgba, t: number): string {
  const r = Math.round(lerpN(base.r, active.r, t));
  const g = Math.round(lerpN(base.g, active.g, t));
  const b = Math.round(lerpN(base.b, active.b, t));
  const a = lerpN(base.a, active.a, t);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

/* The static dot texture is identical every frame, so it is baked into a single
   repeating tile once per resize rather than re-stamped dot by dot each frame. */
function makeDotPattern(ctx: CanvasRenderingContext2D): CanvasPattern | null {
  const tile = document.createElement("canvas");
  tile.width = DOT_SPACING;
  tile.height = DOT_SPACING;
  const tctx = tile.getContext("2d");
  if (!tctx) return null;
  tctx.fillStyle = "rgba(237,230,214,0.05)";
  tctx.beginPath();
  tctx.arc(DOT_SPACING / 2, DOT_SPACING / 2, 0.7, 0, Math.PI * 2);
  tctx.fill();
  return ctx.createPattern(tile, "repeat");
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function KineticGrid({
  children,
  className,
  globalColor = "default",
}: {
  children?: ReactNode;
  className?: string;
  globalColor?: KineticGridTheme;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const targetMouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const patternRef = useRef<CanvasPattern | null>(null);

  // ── Warp ────────────────────────────────────────────────────────────────────

  const getWarpedPoint = useCallback(
    (
      gx: number,
      gy: number,
      col: number,
      row: number,
      mouse: Point,
      ripples: Ripple[],
      cols: number,
      rows: number,
    ): { pt: Point; proximity: number } => {
      // Edge pin — smoothly locks boundary rows/cols in place
      const edgeMargin = 1.5;
      const colPin = Math.min(
        col / edgeMargin,
        (cols - 1 - col) / edgeMargin,
        1,
      );
      const rowPin = Math.min(
        row / edgeMargin,
        (rows - 1 - row) / edgeMargin,
        1,
      );
      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;

      // Ripple displacement
      let rx = 0,
        ry = 0;
      for (const r of ripples) {
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 55;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength =
            (1 - Math.abs(diff) / waveWidth) * r.opacity * 18 * pinFactor;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      // Cursor warp with bell falloff
      if (dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
        const t = dist / INFLUENCE_RADIUS;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
        const warpAmt = eased * MAX_WARP * pinFactor;
        const angle = Math.atan2(dy, dx);
        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    },
    [],
  );

  // ── Draw ────────────────────────────────────────────────────────────────────

  const draw = useCallback(
    (now: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w: W, h: H } = sizeRef.current;
      if (W === 0 || H === 0) return;

      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;
      const theme = THEMES[globalColor] ?? THEMES.default;

      /* Transparent clear, not a filled background — the host element carries
         the Ink ground so the canvas composites over it. */
      ctx.clearRect(0, 0, W, H);

      if (patternRef.current) {
        ctx.fillStyle = patternRef.current;
        ctx.fillRect(0, 0, W, H);
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 400);
        r.opacity = Math.max(0, 1 - age * 1.2);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      // ── Build warped grid ─────────────────────────────────────────────────
      const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
      const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts: Point[][] = [];
      const prox: number[][] = [];

      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];
        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            mouse,
            ripples,
            cols,
            rows,
          );
          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      // ── Grid lines ────────────────────────────────────────────────────────
      const drawSeg = (p1: Point, p2: Point, pr1: number, pr2: number) => {
        const avg = (pr1 + pr2) / 2;
        const t = avg * avg * (3 - 2 * avg); // smoothstep
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = lerpColor(LINE_BASE, theme.lineActive, t);
        ctx.lineWidth = 1; // AST: hairlines are 1px, never 2
        ctx.stroke();
      };

      ctx.lineCap = "butt";

      for (let row = 0; row < rows; row++)
        for (let col = 0; col < cols - 1; col++)
          drawSeg(
            pts[row][col],
            pts[row][col + 1],
            prox[row][col],
            prox[row][col + 1],
          );

      for (let col = 0; col < cols; col++)
        for (let row = 0; row < rows - 1; row++)
          drawSeg(
            pts[row][col],
            pts[row + 1][col],
            prox[row][col],
            prox[row + 1][col],
          );

      // ── Intersection nodes ────────────────────────────────────────────────
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col];
          const t = pr * pr * (3 - 2 * pr); // smoothstep
          const r = lerpN(NODE_BASE_RADIUS, NODE_ACTIVE_RADIUS, t);

          /* Active nodes get a flat 1px ring. The upstream version used a
             radial gradient here; the brand permits no gradient except the
             mark, so the falloff is carried by ring alpha instead. */
          if (t > 0.3) {
            const ringT = (t - 0.3) / 0.7;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r + lerpN(1.5, 6, ringT), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${theme.accent},${(ringT * 0.28).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Node fill
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = lerpColor(NODE_IDLE, theme.nodeActive, t);
          ctx.fill();
        }
      }

      // ── Ripple rings ──────────────────────────────────────────────────────
      for (const r of ripples) {
        const safeRadius = Math.max(0, r.radius);
        ctx.beginPath();
        ctx.arc(r.x, r.y, safeRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${theme.accent},${(r.opacity * 0.28).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    },
    [getWarpedPoint, globalColor],
  );

  // ── Animation loop ──────────────────────────────────────────────────────────

  const animate = useCallback(
    (now: number) => {
      const m = mouseRef.current;
      const t = targetMouseRef.current;

      m.x = lerpN(m.x, t.x, LERP_SPEED);
      m.y = lerpN(m.y, t.y, LERP_SPEED);

      draw(now);
      rafRef.current = requestAnimationFrame(animate);
    },
    [draw],
  );

  // ── Setup ───────────────────────────────────────────────────────────────────

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    const stop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const start = () => {
      if (rafRef.current || !visible || reduceMotion.matches) return;
      rafRef.current = requestAnimationFrame(animate);
    };

    /* Sized from the host box rather than the viewport, and scaled by DPR so
       the hairlines stay crisp on retina displays. */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = host.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Resetting width clears canvas state, so re-apply the DPR transform.
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        patternRef.current = makeDotPattern(ctx);
      }
      sizeRef.current = { w, h };

      // Keep a static frame correct when the loop is not running.
      if (!rafRef.current) draw(performance.now());
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // Pointer coordinates are host-relative, so the warp tracks under scroll.
    const toLocal = (e: PointerEvent): Point => {
      const rect = host.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onPointerMove = (e: PointerEvent) => {
      targetMouseRef.current = toLocal(e);
    };

    const onPointerLeave = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
    };

    const onPointerDown = (e: PointerEvent) => {
      if (reduceMotion.matches) return;
      const p = toLocal(e);
      const ripples = ripplesRef.current;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();
      ripples.push({ ...p, radius: 0, opacity: 1, born: performance.now() });
    };

    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    host.addEventListener("pointerdown", onPointerDown);

    // Do not burn frames while the hero is scrolled out of view.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "120px" },
    );
    io.observe(host);

    const onMotionChange = () => {
      if (reduceMotion.matches) {
        stop();
        mouseRef.current = { x: -9999, y: -9999 };
        targetMouseRef.current = { x: -9999, y: -9999 };
        ripplesRef.current = [];
        draw(performance.now());
      } else {
        start();
      }
    };
    reduceMotion.addEventListener("change", onMotionChange);

    start();
    if (reduceMotion.matches) draw(performance.now());

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      host.removeEventListener("pointerdown", onPointerDown);
    };
  }, [animate, draw]);

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-ink",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
