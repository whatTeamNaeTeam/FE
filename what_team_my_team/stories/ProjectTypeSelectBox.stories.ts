import type { Meta, StoryObj } from '@storybook/react'
import ProjectTypeSelectBox from '@/app/(profile)/profile/[slug]/active/_components/ProjectTypeSelect'

const meta = {
  title: 'Components/ProjectTypeSelectBox',
  component: ProjectTypeSelectBox,
} satisfies Meta<typeof ProjectTypeSelectBox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
