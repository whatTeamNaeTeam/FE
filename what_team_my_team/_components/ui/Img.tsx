import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ImgProps extends ImageProps {
  fallbackSrc: string
}

const Img = (props: ImgProps) => {
  const { src, fallbackSrc, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(false)
  const [oldSrc, setOldSrc] = useState(src)

  if (oldSrc !== src) {
    setImgSrc(false)
    setOldSrc(src)
  }

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc ? fallbackSrc : src}
      onError={() => {
        setImgSrc(true)
      }}
    />
  )
}

export default Img
