'use client'

import React, { useEffect } from 'react'
import ExplainForm from './ExplainForm'
import ImageForm from './ImageForm'
import LinkForm from './LinkForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@/_components/ui/Button'
import ProjectTitleForm from './ProjectTitleForm'
import MemberForm from './MemberForm'
import { defaultCategory, defaultLink } from '@/_constants/teamAdd'
import useTeamAdd from '@/_services/mutations/useTeamAdd'
import GenreForm from './GenreForm'
import { useRouter } from 'next/navigation'

export interface TeamAddFormValueType {
  title: string
  genre: string | undefined
  explain: string
  image: FileList | undefined
  category: { mainCategory: string; subCategory: string; memberCount: string }[]
  linkList: { link: string }[]
}

const FormContainer = () => {
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { errors },
  } = useForm<TeamAddFormValueType>({
    defaultValues: {
      category: [defaultCategory],
      linkList: [defaultLink],
    },
  })
  const router = useRouter()
  const { mutate } = useTeamAdd()

  // 첫번째 오류 필드를 찾아 포커스
  useEffect(() => {
    const firstError = (
      Object.keys(errors) as Array<keyof typeof errors>
    ).reduce<keyof typeof errors | null>((field, a) => {
      const fieldKey = field as keyof typeof errors
      return !!errors[fieldKey] ? fieldKey : a
    }, null)

    if (firstError) {
      setFocus(firstError as keyof TeamAddFormValueType)
    }
  }, [errors, setFocus])

  const handleExit = () => {
    if (confirm('작성중인 글이 저장되지않습니다. 나가시겠습니까?')) {
      router.push('/')
    }
  }

  const onSubmit: SubmitHandler<TeamAddFormValueType> = (data) => {
    const { title, genre, explain, image, category, linkList } = data

    const formData = new FormData()

    formData.append('name', title)
    if (genre) {
      formData.append('genre', genre)
    }

    formData.append('explain', explain)
    if (image) {
      formData.append('image', image[0])
    }
    // category
    category.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        formData.append(key, value)
      })
    })
    linkList.forEach((item) => {
      formData.append('urls', item.link)
    })

    mutate(formData)
  }

  return (
    <form
      className="flex flex-col w-full max-w-[1080px] p-6 gap-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ProjectTitleForm control={control} />
      <GenreForm control={control} />
      <MemberForm control={control} />
      <ImageForm control={control} />
      <ExplainForm control={control} />
      <LinkForm control={control} />
      <div className="flex gap-x-4 justify-center">
        <Button type="button" variant={'lined'} onClick={handleExit}>
          나가기
        </Button>
        <Button type="submit">생성하기</Button>
      </div>
    </form>
  )
}

export default FormContainer
