"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Login() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkUser()
    window.addEventListener("hashchange", function () {
      checkUser()
    })
  })

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }

  const supabase = createClientComponentClient()

  async function handleSignUp() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    })
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <div className="">
        <div className="">
          <h1>{user.email}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    )
  }
  return (
    <div className="">
      <div className="">
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  )
}
