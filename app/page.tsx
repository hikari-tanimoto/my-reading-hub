"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    );
  }

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
            読書を管理し、知識を蓄積するためのプラットフォームです。
            あなたの読書体験をより豊かにします。
          </p>

          <div className="flex justify-center">
            {session ? (
              <div className="flex flex-col gap-4">
                <div className="alert alert-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>こんにちは、{session.user?.name}さん！</span>
                </div>
                <div className="flex gap-2 w-full">
                  <Link href="/dashboard" className="btn btn-primary flex-1">
                    ダッシュボード
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="btn btn-outline flex-1"
                  >
                    ログアウト
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="btn btn-primary btn-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Googleでログイン
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
