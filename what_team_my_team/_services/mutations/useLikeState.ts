import axiosInstance from '@/_lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { LikeCamel } from '@/_types/project'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { PROJECT_CARD_KEY } from '../queries/useProjectCard'

interface LikeStateResponse {
  like: {
    is_like: boolean
    like_count: number
  }
  version: number
}
interface LikeStateVariables {
  projectId: number
  version: number
}

export const LIKE_STATE_KEY = 'like-info'

const likeState = (projectId: number, version: number) => {
  const body = {
    version,
  }

  const response = axiosInstance
    .post(`/like/${projectId}`, body)
    .then(({ data }) => data)

  return response
}

const useLikeState = () => {
  const queryClient = useQueryClient()

  const likeMutation = useMutation<
    LikeStateResponse,
    AxiosError,
    LikeStateVariables,
    { previousData: LikeCamel | undefined }
  >({
    mutationFn: ({ projectId, version }) => likeState(projectId, version),
    onMutate: async ({ projectId }) => {
      await queryClient.cancelQueries({
        queryKey: [LIKE_STATE_KEY, projectId],
      })

      const previousData = queryClient.getQueryData<LikeCamel>([
        LIKE_STATE_KEY,
        projectId,
      ])

      if (previousData) {
        const nextData: LikeCamel = {
          like: previousData.isLike
            ? previousData.like - 1
            : previousData.like + 1,
          isLike: !previousData.isLike,
          version: previousData.version,
        }
        queryClient.setQueryData([LIKE_STATE_KEY, projectId], nextData)
      }

      return { previousData }
    },
    onError: (_, { projectId }, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<LikeCamel>(
          [LIKE_STATE_KEY, projectId],
          context.previousData,
        )
      }
    },
    onSuccess: (data, { projectId }) => {
      console.log(data)
      const {
        like: { isLike, likeCount },
        version,
      } = convertSnakeToCamel(data)

      const successData: LikeCamel = {
        like: likeCount,
        isLike: isLike,
        version,
      }

      queryClient.setQueryData<LikeCamel>(
        [LIKE_STATE_KEY, projectId],
        successData,
      )
    },
    onSettled: (_, __, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: [LIKE_STATE_KEY, projectId] })
      queryClient.invalidateQueries({
        queryKey: [PROJECT_CARD_KEY, 'inprogress'],
      })
    },
  })

  return likeMutation
}

export default useLikeState
