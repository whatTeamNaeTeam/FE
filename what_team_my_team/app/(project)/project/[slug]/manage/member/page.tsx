import React from 'react'
import TeamMemberContainer from './_components/TeamMemberContainer'
import { cookies } from 'next/headers'
import { getQueryClient } from '@/app/getQueryClient'
import { MANAGE_MY_TEAM_DETAIL_KEY } from '@/_services/queries/useMyTeamDetail'
import axios from 'axios'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from '@/_lib/hydrate.client'
import { baseURL } from '@/_lib/axios'

const page = async ({ params }: { params: { slug: string } }) => {
  const teamId = params.slug
  const cookieStore = cookies()
  const accessCookie = cookieStore.get('access')?.value

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: [MANAGE_MY_TEAM_DETAIL_KEY, teamId],
    queryFn: async () => {
      const response = await axios.get(
        `${baseURL}/user/profile/team-manage/detail/${teamId}`,
        {
          headers: { Authorization: `Bearer ${accessCookie}` },
        },
      )

      return response.data
    },
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <div className="flex flex-col w-full justify-center items-center">
        <TeamMemberContainer teamId={teamId} />
      </div>
    </Hydrate>
  )
}

export default page
