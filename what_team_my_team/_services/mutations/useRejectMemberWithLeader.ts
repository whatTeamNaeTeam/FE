import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

export const rejectMemberWithLeaderApi = async ({
  requestId,
}: {
  requestId: number
}) => {
  const response = await axiosInstance.delete(`/apply/${requestId}`)

  return response.data
}

export const useRejectMemberWithLeader = () => {
  const rejectMemberWithLeaderMutation = useMutation({
    mutationFn: rejectMemberWithLeaderApi,
  })

  return rejectMemberWithLeaderMutation
}
