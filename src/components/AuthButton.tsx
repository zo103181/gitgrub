'use client'

import { supabase } from '@/lib/supabaseClient'

export default function AuthButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 bg-black text-white rounded"
    >
      Sign in with Google
    </button>
  )
}
