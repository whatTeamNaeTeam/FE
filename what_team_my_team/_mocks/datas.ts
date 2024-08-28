import { AssignMember } from '@/_services/queries/useAssignMemberList'
import { EntireMember } from '@/_services/queries/useEntireMemberList'
import { ProjectDetailReturn } from '@/_services/queries/useProjectDetail'

const AssignData: AssignMember[] = [
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

const EntireData: EntireMember = {
  recent_count: 3,
  total_count: 3,
  results: [
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
  ],
}

const ProfileData = {
  profile: {
    name: '강태원',
    student_num: '201811318',
    id: 2,
    image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
    is_approved: false,
    is_staff: false,
    position: '백엔드',
    explain: '열심히 하겠습니다!',
  },
  url: [
    {
      url: 'https://velog.io/@taegong_s',
    },
    {
      url: 'www.github.com/fnzksxl',
    },
  ],
  tech: [
    {
      name: 'FastAPI',
    },
    {
      name: 'Django',
    },
    {
      name: 'MySQL',
    },
  ],
  is_owner: true,
}

const ProjectDetailData: ProjectDetailReturn = {
  team: {
    id: 31,
    leader_info: {
      name: '강태원',
      id: 1112,
      image_url:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/user/1112/thumnail.jpg',
    },
    title: '불멸의 태공스',
    explain: '### 호정제국의 침략을 막아라!',
    genre: '게임',
    like: 1,
    version: 1,
    image_url:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/d7a3677a-87de-4e0d-8b05-d207507c9179/image.jpg',
    view: 3,
    category: [
      {
        id: 57,
        tech: '언리얼엔진',
        need_num: 4,
        current_num: 0,
      },
      {
        id: 56,
        tech: '스토리개발',
        need_num: 1,
        current_num: 0,
      },
    ],
    urls: ['www.daum.net', 'https://github.com/fnzksxl123'],
  },
  is_leader: false,
  is_like: false,
}
const ApplyResponseData = {
  id: 4,
  team_id: 36,
  user_id: 4,
  created_at: '2024-04-26T02:24:42.910791',
  bio: '열심히 하겠습니다!!',
  tech: '웹프론트엔드',
}
const InprogressProjectData = {
  team: Array.from({ length: 3 }, (_, idx) => ({
    id: idx,
    title: '안티호정카페',
    image:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/b6aff390-d0b5-4c97-a910-0e10be99f39f/image.jpg',
    category: [
      {
        id: 38,
        tech: '자바',
        need_num: 2,
        current_num: 0,
      },
      {
        id: 37,
        tech: '웹프론트엔드',
        need_num: 3,
        current_num: 0,
      },
    ],
    leader_info: {
      id: 1112,
      name: '강태원',
    },
    like: 0,
    version: 0,
    view: 0,
    genre: '웹',
    is_like: false,
  })),
  is_owner: false,
}
const AccomplishedData = {
  team: [],
  is_owner: false,
}

const MainPageProjectListData = {
  next: 'http://localhost:9090/api/team/list',
  previous: null,
  results: Array.from({ length: 8 }, (_, idx) => ({
    id: idx,
    title: '오빠와치4',
    image_url:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/19a2fc92-c951-4d9d-a409-c055ce124d0e/thumnail.jpg',
    category: [
      {
        id: 50,
        tech: '스토리개발',
        need_num: 2,
        current_num: 0,
      },
      {
        id: 51,
        tech: '언리얼엔진',
        need_num: 2,
        current_num: 0,
      },
    ],
    leader_info: {
      id: 1112,
      name: '강태원',
      image_url:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/user/1112/thumnail.jpg',
    },
    like: 0,
    version: 0,
    view: 1,
    genre: '게임',
    is_like: false,
  })),
}

const assignTeamListData = [
  {
    id: 49,
    title: '왜적 장호정을 물리쳐라잇',
    created_at: '2024-07-26T07:42:09.703799',
    genre: '게임',
    leader_info: {
      name: '강태원',
      id: 1112,
      image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
      student_num: '201811318',
      position: '백엔드',
    },
  },
  {
    id: 50,
    title: '왓냥 프로젝트',
    created_at: '2024-07-26T07:42:09.703799',
    genre: '웹',
    leader_info: {
      name: '장호정',
      id: 1112,
      image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
      student_num: '201811318',
      position: '백엔드',
    },
  },
]

const entireTeamData = {
  count: 101,
  results: Array.from({ length: 10 }, (_, idx) => ({
    id: idx,
    title: 'mock 프로젝트',
    created_at: new Date().toDateString(),
    genre: '웹',
  })),
}

const myTeamData = {
  team: [
    {
      id: 45,
      title: '왜적 장호정을 물리쳐라잇',
      leader_info: {
        name: '강태원',
        id: 1112,
        image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
        is_leader: true,
      },
      member_count: 1,
    },
    {
      id: 44,
      title: '왜적 장호정을 물리쳐라',
      leader_info: {
        name: '김연재',
        id: 1112,
        image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
        is_leader: true,
      },
      member_count: 1,
    },
  ],
}

const myTeamDetailData = {
  title: '왜적 장호정을 물리쳐라잇',
  leader_info: {
    name: '일이삼',
    student_num: '201811318',
    id: 1112,
    image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
    position: '백엔드',
    category: '팀장',
  },
  members_info: Array.from({ length: 6 }, (_, idx) => ({
    name: '장호정',
    student_num: '2020131313',
    id: idx,
    image_url: 'https://avatars.githubusercontent.com/u/71972587?v=4',
    position: '백엔드',
    category: '게임 기획',
  })),
  member_count: 2,
  team_id: 49,
}
const notApprovedMemberData = Array.from({ length: 4 }, (_, idx) => ({
  id: idx,
  team_id: 36,
  created_at: '2024-04-26T02:24:42.910791',
  bio: '열심히 하겠습니다!!',
  tech: '웹',
  user_info: {
    id: 127,
    name: '이경자',
    image_url:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/default/thumnail.jpg',
    position: '디자이너',
  },
}))

export {
  AssignData,
  EntireData,
  ProfileData,
  ProjectDetailData,
  ApplyResponseData,
  InprogressProjectData,
  AccomplishedData,
  MainPageProjectListData,
  assignTeamListData,
  entireTeamData,
  myTeamData,
  myTeamDetailData,
  notApprovedMemberData,
}
