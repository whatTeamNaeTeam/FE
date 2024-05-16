import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface DeleteMemberResponse {
  success: boolean
}

const deleteMember = (userIds: number) => {
  console.log(userIds)
  const body = { ids: userIds.toLocaleString() }
  const response = axiosInstance
    .delete('/admin/user/list', { data: body })
    .then(({ data }) => data)

  return response
}

const useDeleteMember = () => {
  const { mutate } = useMutation<DeleteMemberResponse, AxiosError, number>({
    mutationFn: deleteMember,
  })

  return { mutate }
}

export default useDeleteMember
