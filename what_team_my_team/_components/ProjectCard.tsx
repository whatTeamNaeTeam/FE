'use client'

import React, { useEffect, useState } from 'react'
import ProfileAvatar from './ProfileAvatar'
import { SelectedCategory, SelectedProject } from '@/_types/project'
import { FaChevronDown } from 'react-icons/fa'
import LikeBtn from './LikeBtn'
import Link from 'next/link'
import Img from './ui/Img'

export interface ProjectCardProps {
  project: SelectedProject
}

const ProjectCard = ({
  project: { id, title, image, category, leaderInfo, version, isLike },
}: ProjectCardProps) => {
  const [positionTotalCount, setPositionTotalCount] = useState<number>(0)
  const [positionRecentCount, setPositionRecentCount] = useState<number>(0)

  useEffect(() => {
    setPositionRecentCount(countRecentCategory(category))
    setPositionTotalCount(countTotalCategory(category))
  }, [category])

  const countTotalCategory = (categories: SelectedCategory[]): number => {
    return categories.reduce((total, category) => total + category.needNum, 0)
  }
  const countRecentCategory = (categories: SelectedCategory[]): number => {
    return categories.reduce(
      (total, category) => total + category.currentNum,
      0,
    )
  }

  return (
    <Link
      href={`/project/${id}`}
      className="inline-block relative w-full border border-gray-4 rounded-md shadow-sm"
    >
      <LikeBtn
        projectId={id}
        version={version}
        isLike={isLike}
        className="absolute top-2 right-2 z-30"
      />
      <div className="relative w-full pb-[66.67%] border-b border-gray-4">
        <div className="absolute w-full h-full">
          <Img
            className="w-full h-full rounded-t-md object-cover rounded-[inherit]"
            fallbackSrc="/assets/projectPlaceholderImg.jpg"
            width={600}
            height={400}
            src={image}
            alt="image"
          />
        </div>
      </div>
      <div className="px-1 py-2">
        <div className="border-b border-gray-2 pb-2 mb-2 px-2">
          <div className="flex gap-2 items-center mb-2">
            <ProfileAvatar
              imgUrl={image}
              size="x-small"
              alt={''}
              className="border"
            />
            <span className="text-sm text-gray-6">{leaderInfo.name}</span>
          </div>
          <div>
            <h3 className="text-sm">{title}</h3>
          </div>
        </div>
        <div className="flex items-center text-xs px-2">
          <span className="mr-1">모집완료</span>
          <span className="text-red-8 mr-1">
            <span>{positionRecentCount}</span>
            <span>/</span>
            <span>{positionTotalCount}</span>
          </span>
          <FaChevronDown />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
