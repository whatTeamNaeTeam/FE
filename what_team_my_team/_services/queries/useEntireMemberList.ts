import axiosInstance from '@/_lib/axios'
import { getDate } from '@/_lib/day'
import { useQuery } from '@tanstack/react-query'

export interface EntireMember {
  total_count: number
  recent_count: number
  results: {
    name: string
    student_num: string
    id: number
    created_at: string
  }[]
}
export interface SelectedEntireMember {
  totalCount: number
  recentCount: number
  results: {
    id: number
    name: string
    studentNum: string
    createdAt: string
  }[]
}

const getEntireMemberList = () => {
  const response = axiosInstance
    .get('/admin/user/list')
    .then(({ data }) => data)

  return response
}

const useEntireMemberList = () => {
  const { data, isLoading, refetch } = useQuery<
    EntireMember,
    Error,
    SelectedEntireMember
  >({
    queryFn: getEntireMemberList,
    queryKey: ['allMember'],
    select: (data) => {
      const selectedData: SelectedEntireMember = {
        totalCount: 0,
        recentCount: 0,
        results: [],
      }

      selectedData.totalCount = data.total_count
      selectedData.recentCount = data.recent_count

      data.results.forEach(({ name, student_num, created_at, id }) => {
        const date = getDate(created_at)
        selectedData.results.push({
          id,
          name,
          studentNum: student_num,
          createdAt: date,
        })
      })

      return selectedData
    },
  })

  return { data, isLoading, refetch }
}

export default useEntireMemberList
