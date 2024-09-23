import { checkEmailCodeApi } from '@/_services/auth'
import { useMutation } from '@tanstack/react-query'

export function useCheckEmailCode() {
  const checkEmailCodeMutation = useMutation({
    mutationFn: checkEmailCodeApi,
  })

  return checkEmailCodeMutation
}
