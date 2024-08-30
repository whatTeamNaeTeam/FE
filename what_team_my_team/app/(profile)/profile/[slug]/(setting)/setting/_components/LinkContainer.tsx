'use client'

import LinkAvatar from '@/_components/LinkAvatar'
import Button from '@/_components/ui/Button'
import { useUpdateUrl } from '@/_hook/mutations/profile/useUpdateUrl'
import { USER_PROFILE_KEY } from '@/_hook/queries/profile/useUserProfile'
import { ConvertedGetUserProfileReturn } from '@/_services/type'
import { useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent } from 'react'
import {
  FormProvider,
  SubmitHandler,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'

interface LinkContainerProps {
  urls: ConvertedGetUserProfileReturn['url']
  userId: string | number
}

interface LinkFormValue {
  linkList: { url: string }[]
}

export function LinkContainer({ userId, urls }: LinkContainerProps) {
  const methods = useForm<LinkFormValue>({
    defaultValues: { linkList: urls },
  })
  const { fields, append, remove } = useFieldArray({
    name: 'linkList',
    control: methods.control,
  })
  const { mutate } = useUpdateUrl()
  const queryClient = useQueryClient()

  const handleSubmitSuccess: SubmitHandler<LinkFormValue> = (data) => {
    const oldLinkListWithJoin = urls.map((value) => value.url).join(',')
    const newLinkListWithJoin = data.linkList
      .filter((value) => value.url !== '')
      .map((value) => value.url)
      .join(',')

    if (oldLinkListWithJoin === newLinkListWithJoin) {
      return
    }

    mutate(
      { userId, url: newLinkListWithJoin },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [USER_PROFILE_KEY, userId],
          })
          alert('성공적으로 링크가 업데이트 되었습니다.')
          methods.reset(data)
        },
        onError: () =>
          alert('알 수 없는 에러가 발생하였습니다. 다시 한번 시도해 주세요.'),
      },
    )
  }

  return (
    <div>
      <h3 className="text-gray-8 font-semibold mb-2">링크</h3>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmitSuccess)}
          className="text-right"
        >
          <ul className="flex flex-col gap-2 w-full mb-4">
            {fields.map(({ url, id }, idx) => (
              <li key={`${id}`} className="flex items-center gap-2 w-full">
                <div className="flex w-full">
                  <LinkAvatar size={'link'} url={url} />
                  <LinkInput index={idx} />
                </div>
                <button
                  type="button"
                  onClick={() => remove(idx)}
                  className="p-2 rounded-full group hover:bg-gray-2"
                >
                  <FaRegTrashAlt className="text-gray-6 group-hover:text-red-6" />
                </button>
              </li>
            ))}
            <Button
              type="button"
              variant={'lined'}
              onClick={() => append({ url: '' })}
            >
              <div className="flex items-center gap-1">
                <FaPlus />
                <span className="text-sm">링크추가</span>
              </div>
            </Button>
          </ul>
          <Button type="submit" disabled={!methods.formState.isDirty}>
            링크 저장
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

function LinkInput({ index }: { index: number }) {
  const { control } = useFormContext<LinkFormValue>()
  const { field } = useController({
    name: `linkList.${index}`,
    control,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    field.onChange({ url: value })
  }

  return (
    <input
      className="text-sm ml-2 w-full border rounded-sm"
      value={field.value.url}
      onChange={handleInputChange}
    />
  )
}
