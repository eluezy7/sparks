// app/dashboard/page.tsx
import cookie from 'cookie'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type User = { id: number; name: string; email: string }

export default async function DashboardPage() {
  // Cookie を取得
  const headerlist = await headers()
  const cookieHeader = headerlist.get('cookie') || ''
  const { token } = cookie.parse(cookieHeader)

  if (!token) {
    redirect('/login')
  }

  // Laravel API でユーザー情報取得
  const apiRes = await fetch(
    `${process.env.BACKEND_URL}/api/auth/me`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  if (!apiRes.ok) {
    redirect('/login') // トークン無効でもリダイレクト
  }
  const user: User = await apiRes.json()

  return (
    <div>
      <h1>Welcome, {user.name} さん！</h1>
      <p>Email: {user.email}</p>
      {/* … */}
    </div>
  )
}
