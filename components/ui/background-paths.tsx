"use client";

import { MotionConfig, motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Upstream ships this on bg-white/neutral-950 with gradient-clipped letters,
   a gradient-bordered pill button, rounded-2xl corners and shadow-lg. None of
   that is permitted here: the ground is Ink, type is Bone at weight 300, the
   mark is the only gradient on the site, corners are square and nothing casts
   a shadow.

   The path animation is also rebuilt. Upstream looped `pathLength` from 0.3 to
   1 with repeatType "loop", so every path hard-reset to 0.3 at the end of its
   cycle — a visible snap, at a different moment for each of the 72 paths — and
   drove `pathOffset` through [0, 1, 0], which reverses direction halfway. Here
   the dash length is fixed and only the offset moves, one full dash cycle per
   iteration, so the loop closes seamlessly. It runs as a CSS animation because
   72 JS-driven stroke updates per frame is what makes it stutter. */

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        // Deterministic per-path timing. Math.random() here would desynchronise
        // the server and client renders and make the result unreproducible.
        duration: 26 + (i % 9) * 1.5,
        delay: -(i * 0.9),
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* A very slight blur on the whole path layer keeps the copy
                legible as lines sweep behind it. Applied to the layer rather
                than a scrim behind the text: a hard-edged blur box leaves a
                visible seam where a line crosses it, and feathering that edge
                would be the opacity wash the brand does not allow. */}
            <svg
                className="h-full w-full text-bone blur-[1.5px]"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                {paths.map((path) => (
                    <path
                        key={path.id}
                        className="path-flow"
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.06 + path.id * 0.012}
                        // Normalises the path to 1 unit so the dash maths holds
                        // regardless of the curve's real length.
                        pathLength={1}
                        strokeDasharray="0.35 0.65"
                        style={
                            {
                                "--flow-duration": `${path.duration}s`,
                                "--flow-delay": `${path.delay}s`,
                            } as CSSProperties
                        }
                    />
                ))}
            </svg>
        </div>
    );
}

/* The letter cascade, kept from upstream but rendered in flat Bone rather than
   gradient-clipped text. MotionConfig handles the reduced-motion case inside
   framer rather than by branching on useReducedMotion() — that hook returns
   null during SSR and a boolean on the client, so branching on it renders
   different markup on each side and trips a hydration mismatch. */
export function AnimatedWords({
    text,
    className,
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const words = text.split(" ");
    let index = -1;

    return (
        <MotionConfig reducedMotion="user">
            <span className={className}>
                {words.map((word, wordIndex) => (
                    /* The word gap is a margin, not a space character: a
                       trailing space inside an inline-block is trimmed by
                       layout, which runs every word together. em-based so it
                       tracks the clamped display size. */
                    <span
                        key={`${word}-${wordIndex}`}
                        className="mr-[0.26em] inline-block whitespace-nowrap last:mr-0"
                    >
                        {word.split("").map((letter, letterIndex) => {
                            index += 1;
                            return (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    className="inline-block"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: delay + index * 0.018,
                                        type: "spring",
                                        stiffness: 170,
                                        damping: 26,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </span>
                ))}
            </span>
        </MotionConfig>
    );
}

export function BackgroundPaths({
    title,
    children,
    className,
    id,
}: {
    title?: string;
    children?: ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <div
            id={id}
            className={cn(
                "relative w-full overflow-hidden bg-ink",
                !children && "flex min-h-screen items-center justify-center",
                className,
            )}
        >
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 w-full">
                {children ?? (
                    <div className="mx-auto max-w-[1140px] px-6 text-center md:px-10">
                        <h1 className="display-xl text-bone">
                            <AnimatedWords text={title ?? "Background paths"} />
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
}
