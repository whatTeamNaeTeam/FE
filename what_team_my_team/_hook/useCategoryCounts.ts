import { CategoryCamel } from '@/_types/project'
import { useEffect, useState } from 'react'

const useCategoryCounts = (categories: CategoryCamel[]) => {
  const [positionTotalCount, setPositionTotalCount] = useState<number>(0)
  const [positionRecentCount, setPositionRecentCount] = useState<number>(0)

  useEffect(() => {
    setPositionRecentCount(countRecentCategory(categories))
    setPositionTotalCount(countTotalCategory(categories))
  }, [categories])

  const countTotalCategory = (categories: CategoryCamel[]): number => {
    return categories.reduce((total, category) => total + category.needNum, 0)
  }

  const countRecentCategory = (categories: CategoryCamel[]): number => {
    return categories.reduce(
      (total, category) => total + category.currentNum,
      0,
    )
  }

  return { positionTotalCount, positionRecentCount }
}

export default useCategoryCounts
