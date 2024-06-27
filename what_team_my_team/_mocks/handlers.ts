import { HttpResponse, http } from 'msw'
import {
  AccomplishedData,
  ApplyResponseData,
  AssignData,
  EntireData,
  InprogressProjectData,
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
  http.get(`*/user/profile/activity/:id`, ({ request }) => {
    const url = new URL(request.url)
    const projectKeyword = url.searchParams.get('keyword')

    if (!projectKeyword) {
      return new HttpResponse(null, { status: 404 })
    }

    if (projectKeyword === 'inprogress') {
      return HttpResponse.json(InprogressProjectData)
    }
    if (projectKeyword === 'accomplished') {
      return HttpResponse.json(AccomplishedData)
    }
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
  http.post(`*/auth/email`, () => {
    return HttpResponse.json({ detail: 'Success to Send Email' })
  }),
  http.patch(`*/auth/email`, () => {
    return HttpResponse.json({ detail: 'Success to Send Email' })
  }),
]
