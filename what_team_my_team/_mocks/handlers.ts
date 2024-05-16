import { HttpResponse, http } from 'msw'
import { AssignData, EntireData, ProfileData } from './datas'

export const handlers = [
  http.get(`*/admin/user/manage`, () => {
    return HttpResponse.json(AssignData)
  }),
  http.patch(`*/admin/user/manage/*`, () => {
    return HttpResponse.json()
  }),
  http.delete(`*/admin/user/manage/*`, () => {
    return HttpResponse.json()
  }),
  http.get(`*/admin/user/list`, () => {
    return HttpResponse.json(EntireData)
  }),
  http.delete(`*/admin/user/list`, () => {
    return HttpResponse.json({ success: true })
  }),
  http.get(`*/user/profile/*`, () => {
    return HttpResponse.json(ProfileData)
  }),
]
