'use client'

import Button from '@/_components/ui/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

interface SocialLoginBtnProps {
  type: string
}

const SocialLoginBtn = ({ type }: SocialLoginBtnProps) => {
  const router = useRouter()

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUrl = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URL
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`

    router.push(url)
  }

  if (type === 'github') {
    return (
      <Button
        size={'full'}
        className="text-sm bg-black rounded-2xl hover:bg-black"
        onClick={handleLogin}
      >
        깃허브로 시작하기
      </Button>
    )
  }

  return null
}

export default SocialLoginBtn
