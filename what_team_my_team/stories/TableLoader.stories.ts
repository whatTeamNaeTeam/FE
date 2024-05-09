import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TableLoader from '@/_components/TableLoader'

const meta = {
  title: 'Components/TableLoader',
  component: TableLoader,
  args: { onClick: fn() },
} satisfies Meta<typeof TableLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
