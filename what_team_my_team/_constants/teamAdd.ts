export const defaultLink = { link: '' }
export const defaultCategory = {
  mainCategory: '프론트엔드',
  subCategory: '웹',
  memberCount: '1',
}

export enum Genre {
  and = '안드로이드',
  ios = 'IOS',
  web = '웹',
  cross = '크로스플랫폼',
  game = '게임',
  extra = '기타',
}

export const GenreData = [
  { value: Genre.and },
  { value: Genre.ios },
  { value: Genre.web },
  { value: Genre.cross },
  { value: Genre.extra },
]

export enum FrontEndSubCategory {
  web = '웹',
  ios = 'IOS',
  and = '안드로이드',
  cross = '크로스플랫폼',
}
export enum BackEndSubCategory {
  java = '자바',
  python = '파이썬',
  node = '노드',
}
export enum ProductionSubCategory {
  uiux = 'UI/UX 기획',
  game = '게임 기획',
  content = '컨텐츠 기획',
  pm = '프로젝트 매니저',
}
export enum GameSubCategory {
  unity = '유니티',
  unreal = '언리얼',
}
export enum AISubCategory {
  deep = '딥러닝',
  machine = '머신러닝',
  dataEngineer = '데이터 엔지니어',
}
export enum DesignSubCategory {
  game = '게임 그래픽 디자인',
  uiux = 'UI/UX 디자인',
}

export const mainCategoryData = [
  '프론트엔드',
  '백엔드',
  '기획',
  '게임',
  'AI',
  '디자인',
]
export const subCategoryData = [
  {
    type: '프론트엔드',
    tags: [
      FrontEndSubCategory.web,
      FrontEndSubCategory.ios,
      FrontEndSubCategory.cross,
      FrontEndSubCategory.and,
    ],
  },
  {
    type: '백엔드',
    tags: [
      BackEndSubCategory.java,
      BackEndSubCategory.node,
      BackEndSubCategory.python,
    ],
  },
  {
    type: '기획',
    tags: [
      ProductionSubCategory.content,
      ProductionSubCategory.game,
      ProductionSubCategory.pm,
      ProductionSubCategory.uiux,
    ],
  },
  { type: '디자인', tags: [DesignSubCategory.game, DesignSubCategory.uiux] },

  {
    type: '게임',
    tags: [GameSubCategory.unity, GameSubCategory.unreal],
  },
  {
    type: 'AI',
    tags: [
      AISubCategory.dataEngineer,
      AISubCategory.deep,
      AISubCategory.machine,
    ],
  },
]
