'use client'

import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  href: string
  onClick: () => void
  label: string
}

const ProfileMenuItem = ({ href, onClick, label }: MenuItemProps) => {
  return (
    <Link href={href}>
      <button className="w-full text-sm py-1 hover:bg-gray-2" onClick={onClick}>
        {label}
      </button>
    </Link>
  )
}

export default ProfileMenuItem
