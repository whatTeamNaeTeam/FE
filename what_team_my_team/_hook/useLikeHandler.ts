import { useQueryClient } from '@tanstack/react-query'
import { LikeCamel } from '@/_types/project'
import useLikeState, {
  LIKE_STATE_KEY,
} from '@/_services/mutations/useLikeState'
import { useEffect, useState } from 'react'

interface UseLikeHandlerProps {
  projectId: number
  version: number
}

const useLikeHandler = ({ projectId, version }: UseLikeHandlerProps) => {
  const queryClient = useQueryClient()
  const likeMutation = useLikeState()
  const [isLike, setIsLike] = useState(false)

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    likeMutation.mutate({ projectId, version })
  }

  const data = queryClient.getQueryData<LikeCamel>([LIKE_STATE_KEY, projectId])

  useEffect(() => {
    setIsLike(!!data?.isLike)
  }, [data])

  return {
    toggleLike,
    isLike: isLike,
  }
}

export default useLikeHandler
