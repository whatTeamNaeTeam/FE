import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const memberAccept = (id: number) => {
  const response = axiosInstance
    .patch(`/admin/user/manage/${id}`)
    .then(({ data }) => data)

  return response
}

const useMemberAccept = () => {
  const memberAcceptMutation = useMutation({ mutationFn: memberAccept })

  return memberAcceptMutation
}

export default useMemberAccept
