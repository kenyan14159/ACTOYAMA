import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
import { env } from '@/lib/env'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')
  
  // 環境変数が設定されている場合は検証、設定されていない場合は警告のみ
  if (env.REVALIDATE_SECRET && secret !== env.REVALIDATE_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    revalidatePath('/news')
    revalidatePath('/results')
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return Response.json({ revalidated: false, error: String(err) }, { status: 500 })
  }
}

