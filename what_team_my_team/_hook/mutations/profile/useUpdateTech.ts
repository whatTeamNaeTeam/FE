import { updateTechApi } from '@/_services/tech'
import { useMutation } from '@tanstack/react-query'

export function useUpdateTech() {
  const updateTechMutation = useMutation({ mutationFn: updateTechApi })

  return updateTechMutation
}
