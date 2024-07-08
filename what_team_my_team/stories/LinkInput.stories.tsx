import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import LinkInput from '@/app/teamAdd/_components/LinkInput'
import { useForm, FormProvider, Control } from 'react-hook-form'
import { TeamAddFormValueType } from '@/app/teamAdd/_components/FormContainer'

const meta = {
  title: 'Example/LinkInput',
  component: LinkInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    index: 0,
  },
  decorators: [
    (Story, context) => {
      const methods = useForm<TeamAddFormValueType>({
        defaultValues: {
          linkList: [{ link: '' }],
        },
      })

      return (
        <FormProvider {...methods}>
          <Story
            {...context}
            args={{ ...context.args, control: methods.control }}
          />
        </FormProvider>
      )
    },
  ],
} satisfies Meta<typeof LinkInput>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { index: 0, control: {} as Control<TeamAddFormValueType> },
}
