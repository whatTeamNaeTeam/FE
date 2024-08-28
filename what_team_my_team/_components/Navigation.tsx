'use client'

import React from 'react'
import Img from './ui/Img'
import { useAtomValue } from 'jotai'
import { isLoggedInState, userState } from '@/_stores/atoms/user'
import Link from 'next/link'
import Button from './ui/Button'
import ProfileMenu from './ProfileMenu'

const Navigation = () => {
  const isLoggedIn = useAtomValue(isLoggedInState)
  const user = useAtomValue(userState)

  return (
    <header className="flex justify-center w-full">
      <nav className="flex justify-between items-center px-2 lg:px-0 max-w-[1048px] w-full h-16">
        <Link href={'/'}>
          <Img
            src={'/assets/logo.svg'}
            fallbackSrc="/"
            alt="wap"
            width={80}
            height={30}
          />
        </Link>
        <div className="flex items-center gap-2">
          {isLoggedIn && (
            <Link href={'/teamAdd'}>
              <Button size={'sm'}>팀 생성</Button>
            </Link>
          )}
          {isLoggedIn && user ? (
            <ProfileMenu user={user} />
          ) : (
            <Link href={'/signin'}>
              <Button variant={'lined'} size={'sm'}>
                로그인
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navigation
