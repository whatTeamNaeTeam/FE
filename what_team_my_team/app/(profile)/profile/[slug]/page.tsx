import React from 'react'
import ProfileContainer from './_components/ProfileContainer'
import { getQueryClient } from '@/app/getQueryClient'
import {
  USER_PROFILE_KEY,
  getUserProfile,
} from '@/_services/queries/useUserProfile'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from '@/_lib/hydrate.client'

const ProfilePage = async ({ params }: { params: { slug: string } }) => {
  const userId = params.slug

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: [USER_PROFILE_KEY, userId],
    queryFn: () => getUserProfile(userId),
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <div className="w-full">
        <ProfileContainer userId={userId} />
      </div>
    </Hydrate>
  )
}

export default ProfilePage
