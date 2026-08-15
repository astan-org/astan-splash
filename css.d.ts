/* Next compiles plain CSS side-effect imports at build time, but the types it
   ships (next/types/global.d.ts) declare only `*.module.css`. Without this the
   editor flags `import "./globals.css"` in app/layout.tsx, even though tsc and
   the build are both happy. */
declare module "*.css";
