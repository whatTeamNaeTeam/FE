import { rejectMemberApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export function useRejectMember() {
  const rejectMemberWithLeaderMutation = useMutation({
    mutationFn: rejectMemberApi,
  })

  return rejectMemberWithLeaderMutation
}
