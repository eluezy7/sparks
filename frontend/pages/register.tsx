'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [pw, setPw]       = useState('')
  const router = useRouter()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
     console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
    e.preventDefault()
    console.log("submit開始");
    const res = await fetch(
      //'http://localhost:8000/api/auth/register',
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: 'POST',
       
        headers: { 
          'Content-Type': 'application/json' ,
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password: pw }),
        credentials: 'include',
        
      }
    )

    console.log("res.status:", res.status) // 👈 ステータス番号（401? 422? 500?）
    const data = await res.json()
    if (res.ok) {
       console.log("res.ok:", res.ok) // 👈 falseになる原因を探る
       
      if (data.token) {
            try {
                  localStorage.setItem('token', data.token)
                } catch (e) {
                  console.error("localStorage保存失敗:", e)
                }
            router.push('/')
          } else {
            alert('トークンが取得できませんでした')
      }
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input className="border border-black" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br/><br/>
        <input className="border border-black" value={pw} onChange={e => setPw(e.target.value)} placeholder="Password" type="password" /><br/><br/>
        <button className="border border-black" type="submit">登録</button><br/><br/>
      </form>
      <Link href="/login" className="border border-black">戻る</Link>
    </div>

  )
}
