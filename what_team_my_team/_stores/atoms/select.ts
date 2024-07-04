import { atom } from 'jotai'

export const projectTypeItems = [
  { label: '진행중 프로젝트', value: 'progress' },
  { label: '완료 프로젝트', value: 'completed' },
]

export const projectTypeAtom = atom<string>(projectTypeItems[0].value)
