import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthSessionProvider from "@/providers/session-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Reading Hub',
  description: '読書管理アプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-theme="light">
      <body className={inter.className}>
        <AuthSessionProvider>
          <div className="min-h-screen bg-base-100">{children}</div>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
