import { getEmailCodeApi } from '@/_services/auth'
import { useMutation } from '@tanstack/react-query'

export function useGetEmailCode() {
  const getEmailCodeMutation = useMutation({
    mutationFn: getEmailCodeApi,
  })

  return getEmailCodeMutation
}
