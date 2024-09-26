'use client'

import React, { useEffect } from 'react'
import ExplainForm from './ExplainForm'
import ImageForm from './ImageForm'
import LinkForm from './LinkForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@/_components/ui/Button'
import ProjectTitleForm from './ProjectTitleForm'
import MemberForm from './MemberForm'
import {
  defaultCategory,
  defaultLink,
  MainCategoryType,
  SubCategoryType,
} from '@/_constants/teamAdd'
import { GenreForm } from './GenreForm'
import { useRouter } from 'next/navigation'
import { useAddProject } from '@/_hook/mutations/project/useAddProject'
import toast from 'react-hot-toast'
import axios from 'axios'
import { CustomErrorResponse, HttpError } from '@/_types/error'
import {
  isCategoryMemberValidate,
  isLinkEmptyError,
  isNotAllowedCategoryError,
  isNotAllowedGenreError,
  isNotAllowedImageType,
  isProjectExplainValidationError,
  isProjectTitleDuplicatedError,
  isProjectTitleValidationError,
} from '@/_lib/error'
import { ErrorMessage } from '@/_constants/error'

export interface TeamAddFormValueType {
  title: string
  genre: string
  explain: string
  image: FileList | undefined
  category: {
    mainCategory: MainCategoryType
    subCategory: SubCategoryType<MainCategoryType>
    memberCount: number
  }[]
  linkList: { link: string }[]
}

const FormContainer = () => {
  const {
    handleSubmit,
    control,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<TeamAddFormValueType>({
    defaultValues: {
      category: [defaultCategory],
      linkList: [defaultLink],
    },
  })
  const router = useRouter()
  const { mutate, isPending } = useAddProject()

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

    formData.append('title', title)
    formData.append('genre', genre)
    formData.append('explain', explain)
    // 이미지
    if (image) {
      formData.append('image', image[0])
    }
    // 모집분야
    category.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        if (key !== 'mainCategory') {
          formData.append(key, value.toString())
        }
      })
    })

    // 공백인 url은 추가하지 않음
    const urls = linkList
      .filter((item) => item.link.trim() !== '')
      .map((item) => item.link)
      .join(',')

    if (urls) {
      formData.append('urls', urls)
    }

    mutate(formData, {
      onSuccess: (response) => {
        const successMessage =
          '프로젝트가 성공적으로 생성되었습니다. 관리자 승인을 기다려주세요.'
        toast.success(successMessage)
        router.push(`/project/${response.team.id}`)
      },
      onError: (error) => {
        if (axios.isAxiosError<CustomErrorResponse>(error)) {
          if (error.response) {
            const httpStatus = error.response.status
            const { code } = error.response.data
            const errorMessage = ErrorMessage[code]

            if (isProjectTitleValidationError(code)) {
              setError('title', { type: 'validate', message: errorMessage })
              setFocus('title')
            }
            if (isProjectTitleDuplicatedError(code)) {
              setError('title', { type: 'duplicated', message: errorMessage })
              setFocus('title')
            }
            if (isProjectExplainValidationError(code)) {
              setError('explain', { type: 'validate', message: errorMessage })
              setFocus('explain')
            }
            if (isLinkEmptyError(code)) {
              toast.error(errorMessage)
            }
            if (isNotAllowedCategoryError(code)) {
              toast.error(errorMessage)
            }
            if (isCategoryMemberValidate(code)) {
              toast.error(errorMessage)
            }
            if (isNotAllowedGenreError(code)) {
              setError('genre', { type: 'undefined', message: errorMessage })
              setFocus('genre')
            }
            if (isNotAllowedImageType(code)) {
              setError('image', { type: 'undefined', message: errorMessage })
              setFocus('image')
            }

            throw new HttpError(httpStatus, code)
          }
          throw Error
        }
      },
    })
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
        <Button type="submit" disabled={isPending}>
          생성하기
        </Button>
      </div>
    </form>
  )
}

export default FormContainer
