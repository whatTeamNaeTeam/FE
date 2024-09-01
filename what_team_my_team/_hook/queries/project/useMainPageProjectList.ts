import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { getMainPageProjectListApi } from '@/_services/project'
import {
  GetMainPageProjectListReturn,
  ConvertedGetMainPageProjectReturn,
} from '@/_services/type'

const MAIN_PROJECT_CARD = 'project-card'

export function useMainPageProjectList({ keyword }: { keyword: string }) {
  const mainPageProjectListQuery = useInfiniteQuery<
    GetMainPageProjectListReturn,
    AxiosError,
    InfiniteData<ConvertedGetMainPageProjectReturn>,
    string[],
    string | null
  >({
    queryFn: ({ pageParam }) =>
      getMainPageProjectListApi({ pageParam, keyword }),
    queryKey: [MAIN_PROJECT_CARD],
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.next || null
    },
    select: (data) => {
      const selectedData = data.pages.map((group) => {
        const converted = convertSnakeToCamel(
          group,
        ) as ConvertedGetMainPageProjectReturn

        return converted
      })

      return { ...data, pages: selectedData }
    },
  })

  return mainPageProjectListQuery
}
