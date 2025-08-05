'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [pw,    setPw]    = useState('')
  const router = useRouter()
  

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',       // Laravel が Cookie 発行するなら
        body: JSON.stringify({ email, password: pw }),
      }
    )
    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('認証失敗')
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="border border-black"
          type="email" value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email" required
        /><br/><br/>
        <input
          className="border border-black"
          type="password" value={pw}
          onChange={e => setPw(e.target.value)}
          placeholder="Password" required
        /><br/><br/>
        <button type="submit" className="border border-black">ログイン</button><br/><br/>
      </form>
      <Link href="/register.page" className="border border-black"><button>新規登録</button></Link>
    </div>
  )
}
