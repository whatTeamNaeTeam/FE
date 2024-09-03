import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { getMainPageProjectListApi } from '@/_services/project'
import {
  GetMainPageProjectListReturn,
  ConvertedGetMainPageProjectReturn,
} from '@/_services/type'
import { PROJECT_LIST_KEY } from '@/_constants/queryKey'

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
    queryKey: [...PROJECT_LIST_KEY],
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
