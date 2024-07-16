import React from 'react'
import ProfileContainer from './_components/ProfileContainer'
import { getQueryClient } from '@/app/getQueryClient'
import {
  USER_PROFILE_KEY,
  UserProfileReturn,
} from '@/_services/queries/useUserProfile'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from '@/_lib/hydrate.client'
import axios from 'axios'
import { cookies } from 'next/headers'

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const userId = params.slug
  const cookieStore = cookies()
  const accessCookie = cookieStore.get('access')?.value

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery<UserProfileReturn>({
    queryKey: [USER_PROFILE_KEY, userId],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.whatmeow.shop/api/user/profile/${userId}`,
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
      <div className="w-full px-2">
        <ProfileContainer userId={userId} />
      </div>
    </Hydrate>
  )
}

export default ProfilePage
