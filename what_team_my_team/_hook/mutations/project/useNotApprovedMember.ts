import { convertSnakeToCamel } from './../../../_utils/convertSnakeToCamel'
import { NOT_APPROVED_MEMBER_KEY } from '@/_constants/queryKey'
import { getNotApprovedMemberApi } from '@/_services/project'
import {
  ConvertedGetNotApprovedMemberReturn,
  GetNotApprovedMemberReturn,
} from '@/_services/type'
import { useQuery } from '@tanstack/react-query'

export function useNotApprovedMember({ teamId }: { teamId: string }) {
  const notApprovedMemberQuery = useQuery<
    GetNotApprovedMemberReturn[],
    Error,
    ConvertedGetNotApprovedMemberReturn[]
  >({
    queryFn: () => getNotApprovedMemberApi({ teamId }),
    queryKey: [...NOT_APPROVED_MEMBER_KEY, teamId],
    select: (data) => {
      return convertSnakeToCamel(data)
    },
  })

  return notApprovedMemberQuery
}
