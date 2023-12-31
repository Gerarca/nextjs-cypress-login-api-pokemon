This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

![alt text](https://github.com/Gerarca/nextjs-cypress-login-api-pokemon/blob/main/Docs/react-next+cypress.png?raw=true)

this project is about simple loggin, with cypress, router, taildwind, api pokemon

Login:

![alt text](https://github.com/Gerarca/nextjs-cypress-login-api-pokemon/blob/main/Docs/login.png?raw=true)

Home:

![alt text](https://github.com/Gerarca/nextjs-cypress-login-api-pokemon/blob/main/Docs/home.png?raw=true)

Dashboard:
![alt text](https://github.com/Gerarca/nextjs-cypress-login-api-pokemon/blob/main/Docs/dashboard.png?raw=true)


Profile:
![alt text](https://github.com/Gerarca/nextjs-cypress-login-api-pokemon/blob/main/Docs/profile.png?raw=true)

## Technologies
* Next 13.0.5
* Redux 
* React paginate
* Axios
* React-dom
* Cypress
* Tailwindcss
* flowbite


## Middleware Next-Auth

this project have file `middleware.ts`, this file is for control the routes that a user can access when he is not logged in, or is logged in:

```
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { useAppSelector } from 'redux/hooks/hooks';
 
export async function middleware(req: NextRequest) {

  const token = useAppSelector((state)=>state.UserLogged.userLogged.token)
  
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
```

the token is obtained when a user logs in, therefore, if a user is logged in there is a token stored in a hook.


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
