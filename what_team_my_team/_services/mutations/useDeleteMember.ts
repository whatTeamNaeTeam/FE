import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface DeleteMemberResponse {
  success: boolean
}

const deleteMember = (userIds: string) => {
  const body = { ids: userIds }

  const response = axiosInstance
    .delete('/admin/user/list', { data: body })
    .then(({ data }) => data)

  return response
}

const useDeleteMember = () => {
  const { mutate } = useMutation<DeleteMemberResponse, AxiosError, string>({
    mutationFn: deleteMember,
  })

  return { mutate }
}

export default useDeleteMember
