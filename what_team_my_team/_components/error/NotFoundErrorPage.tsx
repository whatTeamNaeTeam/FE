'use client'

import { useRouter } from 'next/navigation'
import Button from '../ui/Button'

interface NotFoundErrorPageProps {
  title?: string
  label?: string
  onReset?: () => void
}

export function NotFoundErrorPage({
  title,
  label,
  onReset = () => {},
}: NotFoundErrorPageProps) {
  const defaultTitle = '원하시는 페이지를 찾을 수 없습니다.'
  const defaultLabel = `찾으려는 페이지의 주소가 잘못 입력되었거나,
  주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
  입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.`
  const router = useRouter()

  const handleClick = () => {
    onReset()
    router.push('/')
  }

  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">{title ?? defaultTitle}</h1>
      <p className="whitespace-pre-line text-center text-sm text-gray-8 py-4">
        {label ?? defaultLabel}
      </p>

      <Button variant={'lined'} onClick={handleClick}>
        왓팀내팀 홈으로 가기
      </Button>
    </section>
  )
}
