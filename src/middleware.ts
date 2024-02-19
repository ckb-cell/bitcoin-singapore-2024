import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    request.nextUrl.pathname = `/en`;
    return NextResponse.rewrite(request.nextUrl);
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
