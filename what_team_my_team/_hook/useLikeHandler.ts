import { useQueryClient } from '@tanstack/react-query'
import {
  LIKE_STATE_KEY,
  useUpdateLike,
} from '@/_hook/mutations/like/useUpdateLike'
import { useEffect, useState } from 'react'
import { Like } from '@/_types/project'

interface UseLikeHandlerProps {
  projectId: number
  version: number
}

const useLikeHandler = ({ projectId, version }: UseLikeHandlerProps) => {
  const queryClient = useQueryClient()
  const likeMutation = useUpdateLike()
  const [isLike, setIsLike] = useState(false)

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    likeMutation.mutate({ projectId, version })
  }

  const data = queryClient.getQueryData<Like>([LIKE_STATE_KEY, projectId])

  useEffect(() => {
    setIsLike(!!data?.isLike)
  }, [data])

  return {
    toggleLike,
    isLike: isLike,
  }
}

export default useLikeHandler
