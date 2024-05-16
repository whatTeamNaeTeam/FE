import { AssignMember } from '@/_services/queries/useAssignMemberList'
import { EntireMember } from '@/_services/queries/useEntireMemberList'

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
    image: 'https://avatars.githubusercontent.com/u/71972587?v=4',
    is_approved: false,
    is_staff: false,
    position: '백엔드',
    explain: '열심히 하겠습니다!',
  },
  urls: [
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

export { AssignData, EntireData, ProfileData }
