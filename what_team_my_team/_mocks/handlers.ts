import { HttpResponse, delay, http } from 'msw'
import {
  AccomplishedData,
  InprogressProjectData,
  ProfileData,
  ProjectDetailData,
  MainPageProjectListData,
  entireTeamData,
  assignTeamListData,
  myTeamData,
  myTeamDetailData,
  notApprovedMemberData,
} from './datas'

export const handlers = [
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
  http.get(`*/user/profile/team-manage/detail/*`, () => {
    return HttpResponse.json(myTeamDetailData)
  }),
  http.get(`*/user/profile/team-manage/*`, () => {
    return HttpResponse.json(myTeamData)
  }),
  http.get(`*/user/profile/*`, () => {
    return HttpResponse.json(ProfileData)
  }),
  http.get(`*/apply/*`, () => {
    return HttpResponse.json(notApprovedMemberData)
  }),
  http.get(`*/team/detail/*`, () => {
    return HttpResponse.json(ProjectDetailData)
  }),
  http.post(`*/auth/email`, () => {
    return HttpResponse.json({ detail: 'Success to Send Email' })
  }),
  http.patch(`*/auth/email`, () => {
    return HttpResponse.json({ detail: 'Success to Send Email' })
  }),
  http.post(`*/like/:projectId`, () => {
    return HttpResponse.json(
      {
        like: { is_like: true, like_count: 1 },
        version: 1,
      },
      { status: 200 },
    )
  }),
  http.get(`*/admin/team/manage`, async () => {
    return HttpResponse.json(assignTeamListData)
  }),
  http.get(`*/admin/team/list`, async () => {
    await delay(5000)
    return HttpResponse.json(entireTeamData)
  }),
  http.get(`*/team/*`, async () => {
    await delay(1000)
    return HttpResponse.json(MainPageProjectListData)
  }),
  http.delete(`*/auth/logout`, () => {
    return new HttpResponse(null, { status: 200 })
  }),
]
