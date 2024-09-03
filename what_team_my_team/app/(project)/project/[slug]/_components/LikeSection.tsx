'use client'

import { LIKE_STATE_KEY } from '@/_hook/mutations/like/useUpdateLike'
import useLikeHandler from '@/_hook/useLikeHandler'
import { Like } from '@/_types/project'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

interface LikeSectionProps {
  teamId: string | number
  data: Like
}

export function LikeSection({ data, teamId }: LikeSectionProps) {
  const queryClient = useQueryClient()
  useEffect(() => {
    const isLikeCacheData = queryClient.getQueryData([LIKE_STATE_KEY, teamId])
    if (!isLikeCacheData) {
      queryClient.setQueryData([LIKE_STATE_KEY, teamId], {
        like: data.like,
        isLike: data.isLike,
        version: data.version,
      })
    }
  }, [data.like, data.isLike, data.version])

  const { isLike, toggleLike, likeCount } = useLikeHandler({
    projectId: teamId,
    initialData: data,
  })

  return (
    <div>
      <button
        className={`flex flex-col justify-center items-center border rounded-md w-16 h-16 ${isLike}? bg-black' : 'bg-gray`}
        onClick={toggleLike}
      >
        {isLike ? (
          <FaStar size={20} className="text-yellow-6" />
        ) : (
          <FaRegStar size={20} className="text-gray-6" />
        )}
        <span className="text-sm text-gray-6">{likeCount}</span>
      </button>
    </div>
  )
}
