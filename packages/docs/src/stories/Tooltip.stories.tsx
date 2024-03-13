import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@n-ignite-ui/react'

export default {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  args: {
    description: '26 de Outubro - Disponível',
    buttonText: 'See Tooltip'
  },
  argTypes: {
    buttonText: {
      control: false
    }
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
