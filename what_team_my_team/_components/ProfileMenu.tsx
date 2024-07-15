'use client'

import React, { useEffect, useRef, useState } from 'react'
import ProfileAvatar from './ProfileAvatar'
import useHandleLogout from '@/_hook/useHandleLogout'
import { FaChevronDown } from 'react-icons/fa'
import { UserCamel } from '@/_services/mutations/useSocialLogin'
import ProfileMenuItem from './ProfileMenuItem'

interface ProfileMenuProps {
  user: UserCamel
}

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { handleLogout } = useHandleLogout()
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    if (isToggle) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isToggle])

  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsToggle(false)
    }
  }

  const handleItemClick = () => {
    setIsToggle(false)
  }

  const MenuItem = [
    {
      label: '프로필',
      href: `/profile/${user?.id}`,
      onClick: handleItemClick,
    },
    {
      label: '활동내역',
      href: `/profile/${user?.id}/active`,
      onClick: handleItemClick,
    },
    {
      label: '팀관리',
      href: `/profile/${user?.id}/team`,
      onClick: handleItemClick,
    },
  ]

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 py-2 px-2 rounded-3xl hover:bg-gray-2 duration-300"
        onClick={handleToggle}
      >
        <ProfileAvatar imgUrl={user?.imageUrl} alt="프로필" size={'x-small'} />
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm">{user.name}</span>
          <FaChevronDown
            size={10}
            className={`duration-300 ${isToggle ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {isToggle && (
        <section
          className="flex flex-col absolute top-full right-0 translate-y-1 z-50 rounded-md bg-white border w-40"
          ref={menuRef}
        >
          {MenuItem.map((item) => (
            <ProfileMenuItem
              href={item.href}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
          <button
            className="w-full text-sm py-1 hover:bg-gray-2"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </section>
      )}
    </div>
  )
}

export default ProfileMenu
