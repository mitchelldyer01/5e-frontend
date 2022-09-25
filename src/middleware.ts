import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Authenticator } from './services/authenticator';

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
  const authenticator = new Authenticator();
  const redirectUrl = request.nextUrl.clone();

  let token = request.cookies.get('token');

  authenticator.fetchLoggedIn(token)
    .then(response => {
      switch (path) {
        case '/login':
        case '/register':
          if (response.status === 200) {
            redirectUrl.pathname = '/';
            return NextResponse.redirect(redirectUrl);
          }
          return NextResponse.next();
        default:
          if (response.status === 200) {
            return NextResponse.next();
          }
          redirectUrl.pathname = '/login';
          return NextResponse.redirect(redirectUrl);
      }
    })
    .catch(error => {
      console.log(error);
    });  
}
