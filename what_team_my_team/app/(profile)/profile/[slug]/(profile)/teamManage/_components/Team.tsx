'use client'

import { ConvertedGetMyTeamReturn } from '@/_services/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface TeamProps {
  item: ConvertedGetMyTeamReturn['team'][number]
}

export function Team({ item }: TeamProps) {
  return (
    <li className="flex w-full rounded-2xl hover:shadow-md">
      <button className="w-full">
        <Link href={`/project/${item.id}/manage`}>
          <div className="flex items-center gap-2 py-4 px-4">
            <Image
              width={40}
              height={40}
              src={'/assets/logo.svg'}
              alt="썸네일"
              className="w-20 h-20 border border-gray-4 rounded-lg"
            />
            <div className="flex flex-col">
              <span>{item.title}</span>
            </div>
          </div>
        </Link>
      </button>
    </li>
  )
}
