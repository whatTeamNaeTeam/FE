import { acceptMemberApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export const useAcceptMemberWithLeader = () => {
  const acceptMemberWithLeaderMutation = useMutation({
    mutationFn: acceptMemberApi,
  })

  return acceptMemberWithLeaderMutation
}
