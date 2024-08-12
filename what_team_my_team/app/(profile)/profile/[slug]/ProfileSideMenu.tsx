'use client'

import useHandleLogout from '@/_hook/useHandleLogout'
import { cn } from '@/_lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileSideMenu = ({ userId }: { userId: string }) => {
  const { handleLogout } = useHandleLogout()
  const pathname = usePathname()

  const menuItems = [
    { href: `/profile/${userId}`, label: '프로필' },
    { href: `/profile/${userId}/active`, label: '내 활동' },
    { href: `/profile/${userId}/teamManage`, label: '팀 관리' },
  ]

  return (
    <aside className="hidden px-2 flex-col w-full max-w-[240px] md:flex">
      <div className="flex flex-col gap-8 mb-40">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <button
              className={cn('w-full text-left text-xl', {
                'text-black': pathname === item.href,
                'text-gray-6': pathname !== item.href,
              })}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </div>
      <button className=" text-left text-xl text-red-6" onClick={handleLogout}>
        로그아웃
      </button>
    </aside>
  )
}

export default ProfileSideMenu
