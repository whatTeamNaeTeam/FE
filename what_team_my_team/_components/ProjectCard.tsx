'use client'

import React, { useEffect } from 'react'
import ProfileAvatar from './ProfileAvatar'
import { CategoryCamel, ProjectCamel } from '@/_types/project'
import { FaChevronDown } from 'react-icons/fa'
import LikeBtn from './LikeBtn'
import Link from 'next/link'
import Img from './ui/Img'
import useCategoryCounts from '@/_hook/useCategoryCounts'
import { useQueryClient } from '@tanstack/react-query'
import { LIKE_STATE_KEY } from '@/_services/mutations/useLikeState'

export interface ProjectCardProps {
  project: ProjectCamel
}

const ProjectCard = ({
  project: { id, title, imageUrl, category, leaderInfo, version, isLike, like },
}: ProjectCardProps) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const isLikeCacheData = queryClient.getQueryData([LIKE_STATE_KEY, id])
    if (!isLikeCacheData) {
      queryClient.setQueryData([LIKE_STATE_KEY, id], { like, isLike, version })
    }
  }, [like, isLike, version])
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
      <ImageSection image={imageUrl} />
      <DetailSection
        leaderInfo={leaderInfo}
        title={title}
        category={category}
      />
    </Link>
  )
}

const ImageSection = ({ image }: { image: string }) => {
  return (
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
  )
}

interface ProjectDetailsProps {
  leaderInfo: { name: string }
  title: string
  category: CategoryCamel[]
}

const DetailSection = ({
  leaderInfo,
  title,
  category,
}: ProjectDetailsProps) => {
  const { positionRecentCount, positionTotalCount } =
    useCategoryCounts(category)

  return (
    <div className="px-1 py-2">
      <div className="border-b border-gray-2 pb-2 mb-1 px-2">
        <div className="flex gap-2 items-center mb-2">
          <ProfileAvatar
            imgUrl={leaderInfo.name}
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
      <div className="inline-flex relative items-center text-xs px-2 group">
        <span className="mr-1">모집완료</span>
        <span className="text-red-8 mr-1">
          <span>{positionRecentCount}</span>
          <span>/</span>
          <span>{positionTotalCount}</span>
        </span>
        <FaChevronDown />
        <div className="absolute hidden w-40 bg-white border border-gray-4 group-hover:block p-2 bottom-0 left-full">
          {category.map((value) => (
            <div key={value.id} className="flex justify-between">
              <span>{value.tech}</span>
              <span className="text-red-8">
                <span>{value.currentNum}</span>
                <span>/</span>
                <span>{value.needNum} </span>
                <span className="text-black">명</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
