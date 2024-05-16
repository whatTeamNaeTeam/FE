'use client'

import React from 'react'
import AvatarRoot, { AvatarRootProps } from './ui/Avatar/Root'
import AvatarImage from './ui/Avatar/Image'
import AvatarFallback from './ui/Avatar/Fallback'

interface ProfileAvatarProps extends AvatarRootProps {
  imgUrl: string
  alt: string
}

const ProfileAvatar = ({ imgUrl, alt, ...props }: ProfileAvatarProps) => {
  return (
    <AvatarRoot {...props}>
      <AvatarImage src={imgUrl} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </AvatarRoot>
  )
}

export default ProfileAvatar
