import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
import { Button } from '../Button'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  description: string
  buttonText: string
}

export function Tooltip({ description, buttonText, ...props }: TooltipProps) {
  return (
    <TooltipProvider {...props} delayDuration={400}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <Button>{buttonText}</Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={-8}>
            {description}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
