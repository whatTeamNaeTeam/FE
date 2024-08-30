'use client'

import Button from '@/_components/ui/Button'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import SelfIntroduceContainer from './SelfIntroduceContainer'
import { PositionContainer } from './PositionContainer'
import { useUpdateProfile } from '@/_hook/mutations/profile/useUpdateProfile'
import { ImageInput } from './ImageInput'
import { useQueryClient } from '@tanstack/react-query'
import { USER_PROFILE_KEY } from '@/_hook/queries/profile/useUserProfile'
import { ConvertedGetUserProfileReturn } from '@/_services/type'

interface BasicInfoContainerProps {
  userId: number | string
  profile: ConvertedGetUserProfileReturn['profile']
}
export interface BasicInfoFormValues {
  profileImage: FileList | undefined
  selfIntroduce: string
  position: string
}

export const BasicInfoContainer = ({
  userId,
  profile,
}: BasicInfoContainerProps) => {
  const methods = useForm<BasicInfoFormValues>({
    defaultValues: {
      selfIntroduce: profile.explain,
      position: profile.position,
    },
  })
  const { mutate } = useUpdateProfile()
  const queryClient = useQueryClient()

  const handleSubmitSuccess: SubmitHandler<BasicInfoFormValues> = (data) => {
    const { profileImage, position, selfIntroduce } = data

    const formData = new FormData()

    if (profileImage) {
      formData.append('image', profileImage[0])
    }
    formData.append('position', position)
    formData.append('explain', selfIntroduce)

    mutate(
      { userId, formData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [USER_PROFILE_KEY, userId],
          })
          alert('성공적으로 프로필이 업데이트 되었습니다.')
          methods.reset(data)
        },
        onError: () =>
          alert('알 수 없는 에러가 발생하였습니다. 다시 한번 시도해 주세요.'),
      },
    )
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2 w-full mb-4"
        onSubmit={methods.handleSubmit(handleSubmitSuccess)}
      >
        <div>
          <h3 className="text-gray-8 font-semibold mb-2">기본 정보</h3>
          <div className="flex items-center gap-8">
            <ImageInput imageUrl={profile.imageUrl} inputId={'profileImage'} />
            <div className="flex gap-2">
              <Button asChild>
                <label
                  htmlFor={'profileImage'}
                  className="hover:cursor-pointer"
                >
                  사진 수정
                </label>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-gray-8 font-semibold mb-2">이름</h3>
            <div className="border border-gray-4 rounded-sm py-2 px-2 bg-gray-2">
              <span className="text-sm">{profile.name}</span>
            </div>
          </div>
          <div>
            <h3 className="text-gray-8 font-semibold mb-2">등급</h3>
            <div className="border border-gray-4 rounded-sm py-2 px-2 bg-gray-2">
              <span className="text-sm">
                {profile.isApproved ? '정회원' : '준회원'}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-gray-8 font-semibold mb-2">학번</h3>
            <div className="border border-gray-4 rounded-sm py-2 px-2 bg-gray-2">
              <span className="text-sm">{profile.studentNum}</span>
            </div>
          </div>
          <PositionContainer />
          <SelfIntroduceContainer />
        </div>
        <Button type="submit" disabled={!methods.formState.isDirty}>
          저장하기
        </Button>
      </form>
    </FormProvider>
  )
}
