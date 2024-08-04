'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/_components/ui/Accordion'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { cn } from '@/_lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const teamManageAccordionItem = [
  {
    header: '팀 관리',
    contents: [
      { key: 'team/assign', content: '팀 승인' },
      { key: 'team/entire', content: '팀 목록' },
    ],
  },
]

const TeamManageAccordion = () => {
  const pathname = usePathname()
  const segments = pathname.split('/')

  const middleSegment = segments[segments.length - 2]
  const lastSegment = segments[segments.length - 1]
  const path = `${middleSegment}/${lastSegment}`

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="header-0"
      className={cn('space-y-4 w-full')}
    >
      {teamManageAccordionItem.map(({ header, contents }, idx) => (
        <AccordionItem
          key={`header-${idx}`}
          value={`header-${idx}`}
          className="group"
        >
          <AccordionTrigger className="text-white">
            <div className="flex items-center gap-1">
              <MdOutlineManageAccounts className="text-gray-6" />
              <span className="items-center gap-2 text-sm font-medium">
                {header}
              </span>
            </div>
            <Image
              src={'/assets/triangleDown.svg'}
              alt="trigger"
              width={24}
              height={24}
              className={cn(
                'ml-1 shrink-0 text-gray-700 ease-in-out',
                'group-radix-state-open:rotate-180 group-radix-state-open:duration-300 group-radix-state-closed:duration-300',
              )}
            />
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              'flex flex-col',
              'overflow-hidden',
              'group-radix-state-open:animate-accordion-slide-down',
              'group-radix-state-closed:animate-accordion-slide-up',
              'text-white',
            )}
          >
            {contents.map(({ key, content }, idx) => (
              <Link href={`/admin/${key}`}>
                <button
                  key={`content-${idx}`}
                  className={cn(
                    'w-full text-left text-sm py-1 pl-[34px] hover:bg-gray-8',
                    `${path === key && 'bg-gray-8'}`,
                  )}
                >
                  {content}
                </button>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default TeamManageAccordion
