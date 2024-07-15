import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import {
  InfiniteProject,
  InfiniteProjectCamel,
  Project,
} from '@/_types/project'
import axiosInstance from '@/_lib/axios'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

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
  const mainPageProjectQuery = useInfiniteQuery<
    InfiniteProject,
    AxiosError,
    InfiniteData<InfiniteProjectCamel>,
    string[],
    string | null
  >({
    queryFn: ({ pageParam }) => getMainPageProjectApi({ pageParam, keyword }),
    queryKey: [MAIN_PROJECT_CARD],
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.next || null
    },
    select: (data) => {
      const selectedData = data.pages.map((group) => {
        const converted = convertSnakeToCamel(group) as InfiniteProjectCamel

        return converted
      })

      return { ...data, pages: selectedData }
    },
  })

  return mainPageProjectQuery
}

export default useMainPageProjectList
