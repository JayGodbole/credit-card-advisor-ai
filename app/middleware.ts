import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Mock function to check if user is authenticated and subscribed
// In a real app, this would check session/token and database
function isAuthenticated(request: NextRequest) {
  // For demo purposes, we'll check for a cookie
  const userId = request.cookies.get('userId')?.value;
  return !!userId;
}

function isSubscribed(request: NextRequest) {
  // For demo purposes, we'll check for a subscription cookie
  const isSubscribed = request.cookies.get('isSubscribed')?.value;
  return isSubscribed === 'true';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protected routes that require subscription
  const protectedRoutes = ['/premium-dashboard', '/ai-recommendations', '/spending-charts'];
  
  // Check if the route requires subscription
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (isProtectedRoute) {
    // Check if user is authenticated
    if (!isAuthenticated(request)) {
      // Redirect to login
      return NextResponse.redirect(new URL('/signin', request.url));
    }
    
    // Check if user is subscribed
    if (!isSubscribed(request)) {
      // Redirect to payment page
      return NextResponse.redirect(new URL('/payment', request.url));
    }
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/premium-dashboard/:path*', '/ai-recommendations/:path*', '/spending-charts/:path*'],
};