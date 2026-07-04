import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the route patterns for your application
const protectedRoutes = [
  "/admin",
  "/hr",
  "/employee",
  "/attendance",
  "/leaves",
  "/payroll",
  "/settings",
  "/dashboard"
];
const publicRoutes = ["/login", "/reset-password"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Determine the route type
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  // Retrieve the session cookie (we will set this during the login process)
  const session = request.cookies.get("session")?.value;

  // 1. Redirect unauthenticated users trying to access protected routes
  if (isProtectedRoute && !session) {
    const loginUrl = new URL("/login", request.url);
    // Preserve the originally requested URL to redirect them back after a successful login
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Redirect already authenticated users away from public routes (like login)
  if (isPublicRoute && session) {
    // Redirecting to a generic dashboard path; your client logic can route them by role later
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the request to proceed if no redirect conditions are met
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT for the following:
     * - api (API routes)
     * - _next/static (static files like CSS/JS)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any file with an extension (e.g., .svg, .png)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)",
  ],
};