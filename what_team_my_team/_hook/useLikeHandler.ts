import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { LIKE_STATE_KEY } from '@/_constants/queryKey'
import axios from 'axios'
import { CustomErrorResponse } from '@/_types/error'
import { isLikeVersionError } from '@/_lib/error'
import toast from 'react-hot-toast'
import { useUpdateLike } from './mutations/auth/useUpdateLike'
import { Like } from '@/_types/type'
import { ErrorMessage } from '@/_constants/error'

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

    const likeData = queryClient.getQueryData<Like>([
      ...LIKE_STATE_KEY,
      projectId,
    ])

    if (!likeData) {
      return
    }

    likeMutation.mutate(
      { projectId, version: likeData.version },
      {
        onError: (error, { projectId }, context) => {
          if (context?.previousData) {
            queryClient.setQueryData<Like>(
              [...LIKE_STATE_KEY, projectId],
              context.previousData,
            )
          }

          if (axios.isAxiosError<CustomErrorResponse>(error)) {
            if (error.response) {
              const { code } = error.response.data
              const errorMessage = ErrorMessage[code]

              if (isLikeVersionError(code)) {
                toast.error(errorMessage)
                return
              }
            }
          }
        },
      },
    )
  }

  useEffect(() => {
    const data = queryClient.getQueryData<Like>([...LIKE_STATE_KEY, projectId])
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
