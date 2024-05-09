import axiosInstance from '@/_lib/axios'
import { getDate } from '@/_lib/day'
import { useQuery } from '@tanstack/react-query'

export interface AssignMember {
  name: string
  student_num: string
  id: number
  created_at: string
}
export interface SelectedAssignMember {
  id: number
  name: string
  studentNum: string
  createdAt: string
}

const associateMemberListApi = () => {
  const response = axiosInstance
    .get('/admin/user/manage')
    .then(({ data }) => data)

  return response
}

const useAssignMemberList = () => {
  const { data, isLoading, isSuccess } = useQuery<
    AssignMember[],
    Error,
    SelectedAssignMember[]
  >({
    queryFn: associateMemberListApi,
    queryKey: ['assignMember'],
    select: (data) => {
      const selectedData: SelectedAssignMember[] = []

      data.forEach(({ name, student_num, created_at, id }) => {
        const date = getDate(created_at)
        selectedData.push({
          id,
          name,
          studentNum: student_num,
          createdAt: date,
        })
      })

      return selectedData
    },
  })

  return { data, isLoading, isSuccess }
}

export default useAssignMemberList
