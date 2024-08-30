'use client'

import { BasicInfoContainer } from './BasicInfoContainer'
import { LinkContainer } from './LinkContainer'
import { TechContainer } from './TechContainer'
import { ProfileSkeleton } from '@/_components/ProfileSkeleton'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useUserProfile } from '@/_hook/queries/profile/useUserProfile'

interface ProfileContainerProps {
  userId: string
}

export function ProfileContainer({ userId }: ProfileContainerProps) {
  const { data } = useUserProfile({ userId })
  const router = useRouter()

  const handleClickBackBtn = () => {
    if (window.confirm('수정한 내용이 저장되지않습니다. 계속 하시겠습니까?')) {
      router.push(`/profile/${userId}`)
    }
  }

  if (!data) {
    return <ProfileSkeleton />
  }

  return (
    <>
      <div className="w-full max-w-[1048px] mb-8">
        <button type="button" className="mb-4" onClick={handleClickBackBtn}>
          <FaChevronLeft />
        </button>
        <BasicInfoContainer userId={userId} profile={data.profile} />
        <TechContainer userId={userId} techList={data.tech} />
        <LinkContainer userId={userId} urls={data.url} />
      </div>
    </>
  )
}
