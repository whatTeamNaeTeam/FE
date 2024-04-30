import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const memberReject = (userId: number) => {
  const response = axiosInstance
    .delete(`/admin/user/manage/${userId}`)
    .then(({ data }) => data)

  return response
}

const useMemberReject = () => {
  const memberRejectMutation = useMutation({ mutationFn: memberReject })

  return memberRejectMutation
}

export default useMemberReject
