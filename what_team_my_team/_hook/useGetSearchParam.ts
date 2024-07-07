import { useSearchParams } from 'next/navigation'

const useGetSearchParam = (key: string) => {
  const params = useSearchParams()

  const codeParam = params.get(key)

  return codeParam
}

export default useGetSearchParam
