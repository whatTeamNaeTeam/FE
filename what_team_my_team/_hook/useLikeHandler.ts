import { useQueryClient } from '@tanstack/react-query'
import { LikeCamel } from '@/_types/project'
import useLikeState, {
  LIKE_STATE_KEY,
} from '@/_services/mutations/useLikeState'

interface UseLikeHandlerProps {
  projectId: number
  version: number
}

const useLikeHandler = ({ projectId, version }: UseLikeHandlerProps) => {
  const queryClient = useQueryClient()
  const likeMutation = useLikeState()

  const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    likeMutation.mutate({ projectId, version })
  }

  const data = queryClient.getQueryData<LikeCamel>([LIKE_STATE_KEY, projectId])

  return {
    toggleLike,
    isLike: data?.isLike,
  }
}

export default useLikeHandler
