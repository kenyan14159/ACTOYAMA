import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pure-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-display font-bold text-stride-blue mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-soot-black mb-4">
          ページが見つかりません
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-block bg-stride-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-stride-blue focus:ring-offset-2"
          aria-label="ホームページに戻る"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}

