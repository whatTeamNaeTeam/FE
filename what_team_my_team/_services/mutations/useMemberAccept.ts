import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const memberAccept = (id: number) => {
  const body = {
    ids: id.toLocaleString(),
  }

  const response = axiosInstance
    .patch(`/admin/user/manage`, body)
    .then(({ data }) => data)

  return response
}

const useMemberAccept = () => {
  const memberAcceptMutation = useMutation({ mutationFn: memberAccept })

  return memberAcceptMutation
}

export default useMemberAccept
