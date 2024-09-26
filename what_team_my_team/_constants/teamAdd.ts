export const Genre = {
  and: '안드로이드',
  ios: 'IOS',
  web: '웹',
  cross: '크로스플랫폼',
  game: '게임',
  extra: '기타',
} as const

export const GenreData = [
  { value: Genre.and },
  { value: Genre.ios },
  { value: Genre.web },
  { value: Genre.cross },
  { value: Genre.extra },
] as const

export const FrontEndSubCategory = {
  web: '웹',
  ios: 'IOS',
  and: '안드로이드',
  cross: '크로스플랫폼',
} as const
export const BackEndSubCategory = {
  java: '자바',
  python: '파이썬',
  node: '노드',
} as const
export const ProductionSubCategory = {
  uiux: 'UI/UX 기획',
  game: '게임 기획',
  content: '컨텐츠 기획',
  pm: '프로젝트 매니저',
} as const
export const GameSubCategory = {
  unity: '유니티',
  unreal: '언리얼',
} as const
export const AISubCategory = {
  deep: '딥러닝',
  machine: '머신러닝',
  dataEngineer: '데이터 엔지니어',
} as const
export const DesignSubCategory = {
  game: '게임 그래픽 디자인',
  uiux: 'UI/UX 디자인',
} as const

export const MainCategory = {
  front: '프론트엔드',
  back: '백엔드',
  prod: '기획',
  game: '게임',
  ai: 'AI',
  design: '디자인',
} as const
export type MainCategoryType = (typeof MainCategory)[keyof typeof MainCategory]
export const mainCategoryData = Object.values(MainCategory)

export type SubCategoryMap = {
  [MainCategory.front]: (typeof FrontEndSubCategory)[keyof typeof FrontEndSubCategory]
  [MainCategory.back]: (typeof BackEndSubCategory)[keyof typeof BackEndSubCategory]
  [MainCategory.prod]: (typeof ProductionSubCategory)[keyof typeof ProductionSubCategory]
  [MainCategory.design]: (typeof DesignSubCategory)[keyof typeof DesignSubCategory]
  [MainCategory.game]: (typeof GameSubCategory)[keyof typeof GameSubCategory]
  [MainCategory.ai]: (typeof AISubCategory)[keyof typeof AISubCategory]
}
export type SubCategoryType<T extends MainCategoryType> =
  T extends keyof SubCategoryMap ? SubCategoryMap[T] : never

export const subCategoryData = [
  {
    type: MainCategory.front,
    tags: Object.values(FrontEndSubCategory),
  },
  {
    type: MainCategory.back,
    tags: Object.values(BackEndSubCategory),
  },
  {
    type: MainCategory.prod,
    tags: Object.values(ProductionSubCategory),
  },
  {
    type: MainCategory.design,
    tags: Object.values(DesignSubCategory),
  },

  {
    type: MainCategory.game,
    tags: Object.values(GameSubCategory),
  },
  {
    type: MainCategory.ai,
    tags: Object.values(AISubCategory),
  },
]

export const defaultLink = { link: '' }

type DefaultCategory<K extends MainCategoryType> = {
  mainCategory: MainCategoryType
  subCategory: SubCategoryMap[K]
  memberCount: number
}
export const defaultCategory: DefaultCategory<'프론트엔드'> = {
  mainCategory: MainCategory.front,
  subCategory: FrontEndSubCategory.web,
  memberCount: 1,
}
