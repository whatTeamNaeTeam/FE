'use client'

import { UserRegisterFormValueType } from '@/app/(auth)/signup/_components/SignupContainer'
import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  field: ControllerRenderProps<UserRegisterFormValueType>
}

const AuthFormInput = ({ field, children, ...props }: FormInputProps) => {
  return (
    <div className="flex justify-between items-center p-2 border focus-within:border-gray-6 rounded-md w-60">
      <input
        value={field.value}
        onChange={field.onChange}
        ref={field.ref}
        className="w-full text-sm outline-none disabled:bg-inherit disabled:text-gray-6"
        {...props}
      />
      {children}
    </div>
  )
}

export default AuthFormInput
