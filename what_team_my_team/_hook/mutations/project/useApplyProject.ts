import { applyProjectApi } from '@/_services/project'
import { ApplyProjectReturn } from '@/_services/type'
import { CustomError } from '@/_types/error'
import { useMutation } from '@tanstack/react-query'

export function useApplyProject() {
  const applyProjectMutation = useMutation<
    ApplyProjectReturn,
    CustomError,
    { categoryId: number; content: string }
  >({
    mutationFn: applyProjectApi,
  })

  return applyProjectMutation
}
