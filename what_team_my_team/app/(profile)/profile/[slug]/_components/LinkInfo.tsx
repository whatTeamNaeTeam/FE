'use client'

import LinkAvatar from '@/_components/LinkAvatar'
import React from 'react'

interface LinkInfoProps {
  urls: { url: string }[]
}

const LinkInfo = ({ urls }: LinkInfoProps) => {
  return (
    <div>
      <h3 className="text-base mb-2">링크</h3>
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
    </div>
  )
}

export default LinkInfo
