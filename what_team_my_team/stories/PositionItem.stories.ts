import type { Meta, StoryObj } from '@storybook/react'
import PositionItem from '@/app/(project)/project/[slug]/_components/PositionItem'
import { Tech } from '@/_services/queries/useProjectDetail'

const meta = {
  title: 'Components/PositionItem',
  component: PositionItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PositionItem>

export default meta

type Story = StoryObj<typeof meta>

const examplePosition: Tech = {
  id: 4,
  tech: '자바스프링',
  needNum: 2,
  currentNum: 0,
}

export const Primary: Story = {
  args: { position: examplePosition },
}
