'use client'

import useLikeHandler from '@/_hook/useLikeHandler'
import { cn } from '@/_lib/utils'
import { Like } from '@/_types/project'
import React, { ButtonHTMLAttributes } from 'react'
import { FaHeart } from 'react-icons/fa'

interface LikeBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialData: Like
  projectId: number
}

const LikeBtn = ({ projectId, initialData, className }: LikeBtnProps) => {
  const { toggleLike, isLike } = useLikeHandler({ projectId, initialData })

  return (
    <button type="button" className={cn(className)} onClick={toggleLike}>
      <FaHeart className={isLike ? 'text-red-6' : 'text-gray-6'} size={20} />
    </button>
  )
}

export default LikeBtn
