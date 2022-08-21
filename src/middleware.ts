import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const PUBLIC_FILE = /\.(.*)$/;
  const path = request.nextUrl.pathname;

  // Skip internals
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/static') ||
    PUBLIC_FILE.test(path)
  ) 
    return NextResponse.next();

  // Check auth
  switch (path) {
    case '/login':
    case '/register':
      return NextResponse.next();
    default:
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
  }  
}
