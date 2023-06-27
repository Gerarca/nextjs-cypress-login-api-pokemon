import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { useAppSelector } from 'redux/hooks/hooks';
 
export async function middleware(req: NextRequest) {

  let token = useAppSelector((state)=>state.UserLogged.userLogged.token)

  const session = await getToken({ req, secret: token });
  if (!session) {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/login`;
    return NextResponse.redirect(url);
  }
 
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/profile']
};