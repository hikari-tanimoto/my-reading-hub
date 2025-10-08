import Image from 'next/image'

export default function Home() {
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
            <button className="btn btn-primary btn-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              ログイン
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
