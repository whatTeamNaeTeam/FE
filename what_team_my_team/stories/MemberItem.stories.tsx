import { convertSnakeToCamel } from '../_utils/convertSnakeToCamel'
import type { Meta, StoryObj } from '@storybook/react'
import MemberItem from '@/app/(project)/project/[slug]/manage/member/_components/MemberItem'
import { myTeamDetailData } from '@/_mocks/datas'

const meta = {
  title: 'Components/MemberItem',
  component: MemberItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MemberItem>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    memberData: convertSnakeToCamel(myTeamDetailData.members_info[0]),
    teamId: '1',
    leaderId: 1,
  },
}
