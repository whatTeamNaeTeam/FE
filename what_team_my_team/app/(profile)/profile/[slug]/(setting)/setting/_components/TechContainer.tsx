'use client'

import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { TechItem } from './TechItem'
import Button from '@/_components/ui/Button'
import { useUpdateTech } from '@/_hook/mutations/profile/useUpdateTech'
import { useQueryClient } from '@tanstack/react-query'
import { USER_PROFILE_KEY } from '@/_hook/queries/profile/useUserProfile'
import { ConvertedGetUserProfileReturn } from '@/_services/type'

interface TechContainerProps {
  techList: ConvertedGetUserProfileReturn['tech']
  userId: string | number
}
export interface TechFormValue {
  techList: { name: string }[]
}

export function TechContainer({ techList, userId }: TechContainerProps) {
  const methods = useForm<TechFormValue>({
    defaultValues: { techList },
  })
  const { fields, append, remove } = useFieldArray({
    name: 'techList',
    control: methods.control,
  })
  const { mutate } = useUpdateTech()
  const queryClient = useQueryClient()

  const handleSubmitSuccess: SubmitHandler<TechFormValue> = (data) => {
    const { techList } = data

    const techListWithJoin = techList.map((item) => item.name).join(',')

    mutate(
      { userId, techs: techListWithJoin },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [USER_PROFILE_KEY, userId],
          })
          alert('성공적으로 기술스택이 업데이트 되었습니다.')
          methods.reset(data)
        },
        onError: () =>
          alert('알 수 없는 에러가 발생하였습니다. 다시 한번 시도해 주세요.'),
      },
    )
  }

  return (
    <div className="mb-4">
      <h3 className="text-gray-8 font-semibold mb-2">기술 스택</h3>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmitSuccess)}
          className="text-right"
        >
          <ul className="flex flex-wrap gap-1 border border-gray-4 rounded-sm py-2 px-2 mb-4">
            {fields.map(({ id }, idx) => (
              <li key={`${id}`}>
                <TechItem index={idx} editMode={false} remove={remove} />
              </li>
            ))}
            <button
              type="button"
              className="flex items-center border border-gray-6 shadow-md rounded-2xl p-1 px-2 opacity-60 hover:opacity-90"
              onClick={() => append({ name: '' })}
            >
              <div className="text-xs">추가</div>
              <FaPlus className="text-xs text-gray-6" />
            </button>
          </ul>
          <Button type="submit" disabled={!methods.formState.isDirty}>
            저장 하기
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
