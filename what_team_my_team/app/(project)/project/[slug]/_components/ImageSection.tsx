'use client'

import { ImageCarousel } from './ImageCarousel'

interface ImageSectionProps {
  imageList: string[]
}

export function ImageSection({ imageList }: ImageSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">이미지</h3>
      <ImageCarousel data={imageList} />
    </div>
  )
}
