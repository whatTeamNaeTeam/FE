import { ConvertedCategory } from '@/_types/type'
import { useEffect, useState } from 'react'

const useCategoryCounts = (categories: ConvertedCategory[]) => {
  const [positionTotalCount, setPositionTotalCount] = useState<number>(0)
  const [positionRecentCount, setPositionRecentCount] = useState<number>(0)

  useEffect(() => {
    setPositionRecentCount(countRecentCategory(categories))
    setPositionTotalCount(countTotalCategory(categories))
  }, [categories])

  const countTotalCategory = (categories: ConvertedCategory[]): number => {
    return categories.reduce((total, category) => total + category.needNum, 0)
  }

  const countRecentCategory = (categories: ConvertedCategory[]): number => {
    return categories.reduce(
      (total, category) => total + category.currentNum,
      0,
    )
  }

  return { positionTotalCount, positionRecentCount }
}

export default useCategoryCounts
