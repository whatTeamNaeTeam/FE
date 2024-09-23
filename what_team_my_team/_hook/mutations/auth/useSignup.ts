import { signupApi } from '@/_services/auth'
import { useMutation } from '@tanstack/react-query'

export function useSignup() {
  const signupMutation = useMutation({
    mutationFn: signupApi,
  })

  return { signupMutation }
}
