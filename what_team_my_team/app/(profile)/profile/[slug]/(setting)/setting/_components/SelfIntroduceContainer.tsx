'use client'

import { useController, useFormContext } from 'react-hook-form'
import { BasicInfoFormValues } from './BasicInfoContainer'

const SelfIntroduceContainer = () => {
  const { control } = useFormContext<BasicInfoFormValues>()
  const { field } = useController({
    name: 'selfIntroduce',
    control,
  })

  return (
    <div>
      <h3 className="text-base mb-2">자기 소개</h3>
      <textarea
        className="border border-gray-4 w-full py-2 px-2 rounded-sm  text-sm resize-none"
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
      />
    </div>
  )
}

export default SelfIntroduceContainer
