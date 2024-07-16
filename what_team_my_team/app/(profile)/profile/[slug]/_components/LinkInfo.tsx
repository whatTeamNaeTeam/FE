'use client'

import LinkAvatar from '@/_components/LinkAvatar'
import { Url } from '@/_services/queries/useUserProfile'
import React from 'react'

interface LinkInfoProps {
  urls: Url[] | null
}

const LinkInfo = ({ urls }: LinkInfoProps) => {
  return (
    <div>
      <h3 className="text-base mb-2">링크</h3>
      {urls ? (
        <ul className="flex flex-col gap-2">
          {urls.map(({ url }, idx) => (
            <li key={`${url}-${idx}`} className="flex items-center gap-2">
              <LinkAvatar size={'link'} url={url} />
              <a href={url} className="text-sm ml-2">
                {url}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-sm">없음</span>
      )}
    </div>
  )
}

export default LinkInfo
