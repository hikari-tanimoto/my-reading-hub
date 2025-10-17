import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // 認証が必要なページの処理
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {
  matcher: ['/dashboard/:path*']
}
