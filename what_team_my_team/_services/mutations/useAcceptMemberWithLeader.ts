import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

export const acceptMemberWithLeaderApi = async ({
  requestId,
}: {
  requestId: number
}) => {
  const response = await axiosInstance.patch(`/apply/${requestId}`)

  return response.data
}

export const useAcceptMemberWithLeader = () => {
  const acceptMemberWithLeaderMutation = useMutation({
    mutationFn: acceptMemberWithLeaderApi,
  })

  return acceptMemberWithLeaderMutation
}
