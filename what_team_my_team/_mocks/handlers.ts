import { HttpResponse, http } from 'msw'

const data = [
  {
    id: 1,
    name: '장호정',
    student_num: '201812379',
    created_at: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: '강태원',
    student_num: '201812321',
    created_at: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    name: '박준영',
    student_num: '201912379',
    created_at: new Date().toLocaleDateString(),
  },
]

export const handlers = [
  http.get(`*/admin/user/manage`, () => {
    return HttpResponse.json(data)
  }),
  http.patch(`*/admin/user/manage/*`, () => {
    return HttpResponse.json()
  }),
  http.delete(`*/admin/user/manage/*`, () => {
    return HttpResponse.json()
  }),
]
