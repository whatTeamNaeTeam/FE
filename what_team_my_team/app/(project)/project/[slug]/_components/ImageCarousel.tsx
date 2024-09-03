import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ImageCarouselProps {
  data: string[]
}

export function ImageCarousel({ data }: ImageCarouselProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div id="slider-container">
      <Slider {...settings}>
        {data.map((image) => (
          <div>
            <div className="flex items-center justify-center border border-gray-4 mx-2">
              <img src={image} className="object-contain" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
