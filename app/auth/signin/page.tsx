'use client'

import { signIn, getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 既にログインしている場合はダッシュボードにリダイレクト
    getSession().then((session) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, [router])

  const handleSlackSignIn = async () => {
    setLoading(true);
    try {
      await signIn("slack", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div>
            <div className="flex justify-center">
              <Image
                width={192}
                height={192}
                src="/images/logos/logo.png"
                alt="My Reading Hub Logo"
              />
            </div>
          </div>

          <p className="py-4">
            アプリケーションを利用するためには、Slackアカウントでログインしてください。
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleSlackSignIn}
              disabled={loading}
              className="btn btn-primary btn-md"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313h6.313A2.528 2.528 0 0117.877 8.834a2.528 2.528 0 01-2.53 2.521H8.834a2.528 2.528 0 01-2.521-2.521A2.528 2.528 0 018.834 6.313zM18.96 19.042a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 19.042a2.528 2.528 0 01-2.522 2.522 2.528 2.528 0 01-2.518-2.522zM17.688 8.834a2.528 2.528 0 010-5.042H15.165a2.528 2.528 0 01-2.522 2.52v2.522a2.528 2.528 0 012.522 2.521 2.528 2.528 0 015.043 0v2.521h2.523a2.528 2.528 0 002.518-2.521v-6.313A2.528 2.528 0 0015.165 0a2.528 2.528 0 00-2.522 2.522v6.313a2.528 2.528 0 002.522 2.521h2.523z"
                    />
                  </svg>
                  Slackでログイン
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
