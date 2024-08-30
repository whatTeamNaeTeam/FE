'use client'

import React, { useEffect, useState } from 'react'
import AvatarRoot, { AvatarRootProps } from './ui/Avatar/Root'
import AvatarImage from './ui/Avatar/Image'
import AvatarFallback from './ui/Avatar/Fallback'

interface ProfileAvatarProps extends AvatarRootProps {
  url: string | null
}

const LinkAvatar = ({ url, ...props }: ProfileAvatarProps) => {
  const [iconPath, setIconPath] = useState<string>('')
  const [alt, setAlt] = useState<string>('')

  useEffect(() => {
    setIconPath(checkMiddleDomain(url))
  }, [url])

  const getMiddleDomain = (url: string) => {
    const protocolRemoved = url.replace(/^(https?:\/\/)?/i, '')
    const splitBySlash = protocolRemoved.split('/')
    const middleDomain = splitBySlash.length > 1 ? splitBySlash[0] : ''

    return middleDomain
  }
  const checkMiddleDomain = (url: string | null) => {
    if (!url) {
      setAlt('link')
      return '/assets/link.svg'
    }

    const checkedMiddle = getMiddleDomain(url)

    if (checkedMiddle.includes('github')) {
      setAlt('github')
      return '/assets/github.svg'
    }
    if (checkedMiddle.includes('notion')) {
      setAlt('notion')
      return '/assets/notion.svg'
    }
    setAlt('link')
    return '/assets/link.svg'
  }

  return (
    <AvatarRoot {...props}>
      <AvatarImage src={iconPath} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </AvatarRoot>
  )
}

export default LinkAvatar
