import type { Meta, StoryObj } from '@storybook/react'
import { ProjectCard, ProjectCardProps } from '@/_components/ProjectCard'
import Providers from '@/_lib/Provider'

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decorators: [(story: any) => <Providers>{story()}</Providers>],
} satisfies Meta<typeof ProjectCard>

export default meta

type Story = StoryObj<typeof meta>

const example: ProjectCardProps = {
  project: {
    id: 3,
    title: 'test3',
    imageUrl:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/test3/image.jpg',
    category: [
      {
        id: 6,
        tech: '자바스프링',
        needNum: 2,
        currentNum: 0,
      },
      {
        id: 5,
        tech: '크로스플랫폼',
        needNum: 3,
        currentNum: 0,
      },
    ],
    leaderInfo: {
      imageUrl:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/test3/image.jpg',
      id: 2,
      name: '강태원',
    },
    like: 1,
    version: 5,
    view: 0,
    isLike: true,
    isApproved: false,
    genre: '게임',
  },
}

export const Default: Story = {
  args: {
    ...example,
  },
}
