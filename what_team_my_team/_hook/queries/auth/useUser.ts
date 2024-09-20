import { USER_KEY } from '@/_constants/queryKey'
import { getUserApi } from '@/_services/auth'
import { ConvertedGetUserReturn, getUserReturn } from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'

export function useUser() {
  const userQuery = useQuery<getUserReturn, Error, ConvertedGetUserReturn>({
    queryFn: getUserApi,
    queryKey: [...USER_KEY],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return userQuery
}

export default useUser
