'use client'

import useLikeHandler from '@/_hook/useLikeHandler'
import { cn } from '@/_lib/utils'
import React, { ButtonHTMLAttributes } from 'react'
import { FaHeart } from 'react-icons/fa'

interface LikeBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  version: number
  projectId: number
  isLike: boolean
}

const LikeBtn = ({ projectId, version, className }: LikeBtnProps) => {
  const { toggleLike, isLike } = useLikeHandler({ projectId, version })

  return (
    <button type="button" className={cn(className)} onClick={toggleLike}>
      <FaHeart className={isLike ? 'text-red-6' : 'text-gray-6'} size={20} />
    </button>
  )
}

export default LikeBtn
