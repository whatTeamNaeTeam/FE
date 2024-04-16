import React from 'react'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  id: string
  label: string
  register: UseFormRegisterReturn
  errors: FieldErrors
}

const AuthFormInput = ({
  id,
  label,
  register,
  errors,
  ...props
}: FormInputProps) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={id} className="text-sm mb-2 font-bold">
        {label}
      </label>
      <div className="w-full p-2 border focus-within:border-gray-6 rounded-md mb-2">
        <input id={id} {...register} className="outline-none" {...props} />
      </div>
      {errors[id]?.message && (
        <p className="text-red-8 text-sm">{`${errors[id]?.message}`}</p>
      )}
    </div>
  )
}

export default AuthFormInput
