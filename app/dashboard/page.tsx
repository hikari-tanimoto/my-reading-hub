import { requireAuth } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'

export default async function Dashboard() {
  const user = await requireAuth()

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            My Reading Hub
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={40}
                  height={40}
                  alt="User Avatar"
                  src={user.image || "/images/avatars/default.png"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="justify-between">
                  プロフィール
                  <span className="badge">New</span>
                </p>
              </li>
              <li>
                <a>設定</a>
              </li>
              <li>
                <Link href="/api/auth/signout">ログアウト</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="hero bg-base-200 rounded-lg">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">ダッシュボード</h1>
              <p className="py-6">
                こんにちは、{user.name}さん！
                <br />
                あなたの読書活動を管理しましょう。
              </p>
              <div className="flex gap-4 justify-center">
                <button className="btn btn-primary">本を追加</button>
                <button className="btn btn-outline">読書記録</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">読書中の本</h2>
              <p>現在読んでいる本の数</p>
              <div className="card-actions justify-end">
                <div className="badge badge-primary">3冊</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">読了した本</h2>
              <p>今年読んだ本の数</p>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary">12冊</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">読みたい本</h2>
              <p>今後読みたい本</p>
              <div className="card-actions justify-end">
                <div className="badge badge-accent">5冊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
