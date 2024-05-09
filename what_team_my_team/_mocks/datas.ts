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

export { AssignData, EntireData }
