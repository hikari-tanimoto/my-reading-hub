import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // ユーザー情報をデータベースに保存
      console.log('User signed in:', user)
      return true
    },
    async session({ session, token }) {
      // セッションにユーザーIDを追加
      if (token && session.user) {
        session.user.id = token.sub || token.id as string
      }
      return session
    },
    async jwt({ token, user, account }) {
      // JWTトークンにユーザー情報を追加
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt' as const,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
