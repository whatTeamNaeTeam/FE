import { useQueryClient } from '@tanstack/react-query'
import {
  LIKE_STATE_KEY,
  useUpdateLike,
} from '@/_hook/mutations/like/useUpdateLike'
import { useEffect, useState } from 'react'
import { Like } from '@/_types/project'

interface UseLikeHandlerProps {
  projectId: number | string
  initialData: Like
}

const useLikeHandler = ({ projectId, initialData }: UseLikeHandlerProps) => {
  const queryClient = useQueryClient()
  const likeMutation = useUpdateLike()
  const [isLike, setIsLike] = useState(initialData.isLike)
  const [likeCount, setLikeCount] = useState(initialData.like)
  const [version, setVersion] = useState(initialData.version)

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    const likeData = queryClient.getQueryData<Like>([LIKE_STATE_KEY, projectId])

    if (!likeData) {
      return
    }

    likeMutation.mutate({ projectId, version: likeData.version })
  }

  useEffect(() => {
    const data = queryClient.getQueryData<Like>([LIKE_STATE_KEY, projectId])
    if (data) {
      setIsLike(!!data.isLike)
      setLikeCount(data.like)
      setVersion(data.version)
    }
  }, [initialData])

  return {
    toggleLike,
    isLike,
    likeCount,
    version,
  }
}

export default useLikeHandler
