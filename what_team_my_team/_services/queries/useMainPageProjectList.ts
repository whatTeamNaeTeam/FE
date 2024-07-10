import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { Project } from '@/_types/project'
import axiosInstance from '@/_lib/axios'
import { useInfiniteQuery } from '@tanstack/react-query'

const MAIN_PROJECT_CARD = 'project-card'

export type Response = {
  next: string | null
  previous: string | null
  results: Project[]
}

const getMainPageProjectApi = ({
  pageParam = null,
  keyword,
}: {
  pageParam: string | null
  keyword: string
}) => {
  const response = axiosInstance
    .get(pageParam || `/team/list?keyword=${keyword}`)
    .then(({ data }) => data)

  return response
}
const useMainPageProjectList = ({ keyword }: { keyword: string }) => {
  const mainPageProjectQuery = useInfiniteQuery({
    queryFn: ({ pageParam }) => getMainPageProjectApi({ pageParam, keyword }),
    queryKey: [MAIN_PROJECT_CARD],
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.next || null
    },
    select: (data) => {
      const convertedData = data.pages.map((group) =>
        convertSnakeToCamel(group),
      )
      console.log({ ...data, pages: convertedData })
      return { ...data, pages: convertedData }
    },
  })

  return mainPageProjectQuery
}

export default useMainPageProjectList
