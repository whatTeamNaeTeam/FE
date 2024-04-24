'use client'

import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface LinkItemProps {
  index: number
  control: Control<TeamAddFormValueType>
}

const LinkItem = ({ index, control }: LinkItemProps) => {
  const { field } = useController({
    name: `linkList.${index}`,
    control,
    defaultValue: { link: '' },
  })
  const [iconPath, setIconPath] = useState<string>('')

  useEffect(() => {
    setIconPath(checkMiddleDomain(field.value.link))
  }, [field.value.link])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    field.onChange({ link: value })
  }

  const getMiddleDomain = (url: string) => {
    const protocolRemoved = url.replace(/^(https?:\/\/)?/i, '')
    const splitBySlash = protocolRemoved.split('/')
    const middleDomain = splitBySlash.length > 1 ? splitBySlash[0] : ''

    return middleDomain
  }
  const checkMiddleDomain = (url: string) => {
    const checkedMiddle = getMiddleDomain(url)
    if (checkedMiddle.includes('github')) {
      return '/assets/github.svg'
    } else if (checkedMiddle.includes('notion')) {
      return '/assets/notion.svg'
    } else {
      return '/assets/link.svg'
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <div>
        <Image src={iconPath} width={24} height={24} alt="github" />
      </div>
      <input
        className="border p-2 text-sm rounded-sm w-[240px]"
        placeholder="url을 입력해주세요"
        value={field.value.link}
        onChange={handleChange}
      />
    </div>
  )
}

export default LinkItem
