'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーログをコンソールに出力（本番環境ではエラートラッキングサービスに送信）
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-pure-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-display font-bold text-stride-blue mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          申し訳ございませんが、予期しないエラーが発生しました。
          しばらく時間をおいてから再度お試しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-stride-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-stride-blue focus:ring-offset-2"
            aria-label="ページを再読み込み"
          >
            再試行
          </button>
          <Link
            href="/"
            className="bg-gray-100 text-soot-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-stride-blue focus:ring-offset-2"
            aria-label="ホームページに戻る"
          >
            ホームに戻る
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-gray-400">
            エラーID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}

