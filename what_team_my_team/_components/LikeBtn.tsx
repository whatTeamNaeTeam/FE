'use client'

import { cn } from '@/_lib/utils'
import useLikeState from '@/_services/mutations/useLikeState'
import React, { ButtonHTMLAttributes, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

interface LikeBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  version: number
  projectId: string
  isLike: boolean
}

const LikeBtn = ({ projectId, version, isLike, className }: LikeBtnProps) => {
  const [likeState, setLikeState] = useState<boolean>(isLike)

  const likeMutation = useLikeState()

  const handleLikeState = () => {
    likeMutation.mutate({ projectId, version })
    setLikeState((prev) => !prev)
  }

  return (
    <button type="button" className={cn(className)} onClick={handleLikeState}>
      <FaHeart className={likeState ? 'text-red-6' : 'text-gray-6'} size={20} />
    </button>
  )
}

export default LikeBtn
