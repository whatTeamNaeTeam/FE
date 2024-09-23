import { rejectMemberApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export function useRejectMember() {
  const rejectMemberMutation = useMutation({
    mutationFn: rejectMemberApi,
  })

  return rejectMemberMutation
}
