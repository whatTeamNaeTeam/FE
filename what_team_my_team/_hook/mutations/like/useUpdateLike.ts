import { Like } from '@/_types/project'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { updateLikeApi } from '@/_services/like'

export const LIKE_STATE_KEY = 'like-info'

export function useUpdateLike() {
  const queryClient = useQueryClient()

  const updateLikeMutation = useMutation({
    mutationFn: updateLikeApi,
    onMutate: async ({ projectId }) => {
      await queryClient.cancelQueries({
        queryKey: [LIKE_STATE_KEY, projectId],
      })

      const previousData = queryClient.getQueryData<Like>([
        LIKE_STATE_KEY,
        projectId,
      ])

      if (previousData) {
        const nextData: Like = {
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
        queryClient.setQueryData<Like>(
          [LIKE_STATE_KEY, projectId],
          context.previousData,
        )
      }
    },
    onSuccess: (data, { projectId }) => {
      const {
        like: { isLike, likeCount },
        version,
      } = convertSnakeToCamel(data)

      const successData: Like = {
        like: likeCount,
        isLike: isLike,
        version,
      }

      queryClient.setQueryData<Like>([LIKE_STATE_KEY, projectId], successData)
    },
    onSettled: (_, __, { projectId }) => {
      queryClient.invalidateQueries({ queryKey: [LIKE_STATE_KEY, projectId] })
      queryClient.invalidateQueries({
        queryKey: ['project'],
      })
    },
  })

  return updateLikeMutation
}
