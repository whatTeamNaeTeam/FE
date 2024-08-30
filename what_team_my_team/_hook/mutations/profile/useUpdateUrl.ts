import { updateUrlApi } from '@/_services/url'
import { useMutation } from '@tanstack/react-query'

export function useUpdateUrl() {
  const updateUrlMutation = useMutation({ mutationFn: updateUrlApi })

  return updateUrlMutation
}
