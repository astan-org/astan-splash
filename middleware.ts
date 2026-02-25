import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Allow static files, API routes, and login page
  if (
    PUBLIC_FILE.test(url.pathname) ||
    url.pathname.startsWith("/api") ||
    url.pathname === "/login"
  ) {
    return NextResponse.next();
  }

  const cookiePassword = req.cookies.get("site-password")?.value;

  if (cookiePassword === process.env.SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
