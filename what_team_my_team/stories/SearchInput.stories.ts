import type { Meta, StoryObj } from '@storybook/react'
import SearchInput from '@/_components/SearchInput'

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
