import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: '/login',
    },
});

export const config = {
    matcher: [
        '/orders/:path*',
        '/products/:path*',
        '/customers/:path*',
        '/reports/:path*',
        '/settings/:path*',
    ],
};
// This middleware will protect the specified routes and redirect to the sign-in page if the user is not authenticated.