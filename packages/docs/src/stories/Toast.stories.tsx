import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@n-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    buttonText: 'See Toast'
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
