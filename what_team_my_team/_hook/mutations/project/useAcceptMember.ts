import { acceptMemberApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export const useAcceptMember = () => {
  const acceptMemberMutation = useMutation({
    mutationFn: acceptMemberApi,
  })

  return acceptMemberMutation
}
