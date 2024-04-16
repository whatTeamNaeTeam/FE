'use client'

import AuthFormInput from '@/_components/AuthFormInput'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SubmitBtn from './SubmitBtn'
import useSignup from '@/_services/mutations/useSignup'
import SignupModal from '@/_components/SignupModal'

interface FormValueType {
  studentNum: string
  name: string
}

const SignupContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValueType>()
  const { mutate } = useSignup()
  const handleSignup: SubmitHandler<FormValueType> = (data) => {
    mutate(data, {
      onSuccess: () => {
        setIsModalOpen(true)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center w-[320px] h-[320px] border mt-[120px]">
      <form
        className="flex flex-col w-full p-12"
        onSubmit={handleSubmit(handleSignup)}
      >
        <AuthFormInput
          type="string"
          id="name"
          label="이름 *"
          register={register('name', { required: '이름을 입력하세요.' })}
          placeholder="ex)홍길동"
          maxLength={7}
          errors={errors}
        />
        <AuthFormInput
          type="string"
          id="studentNum"
          label="학번 *"
          register={register('studentNum', {
            required: '학번을 입력해주세요.',
          })}
          placeholder="ex)201812379"
          maxLength={9}
          errors={errors}
        />
        <SubmitBtn />
      </form>
      {isModalOpen && (
        <SignupModal open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </div>
  )
}

export default SignupContainer
