import { HttpResponse, http } from 'msw'
import {
  ApplyResponseData,
  AssignData,
  EntireData,
  ProfileData,
  ProjectDetailData,
} from './datas'

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
  http.get(`*/team/detail/*`, () => {
    return HttpResponse.json(ProjectDetailData)
  }),
  http.post(`*/team/apply/*`, () => {
    return HttpResponse.json(ApplyResponseData)
  }),
]
