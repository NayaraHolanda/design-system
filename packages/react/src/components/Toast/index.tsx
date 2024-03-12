import { ComponentProps, useState } from 'react'
import {
  ToastClose,
  ToastRoot,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
  buttonText: string
}

export function Toast({ title, description, buttonText }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  function handleToastVisibility(isVisible: boolean) {
    setIsVisible(isVisible)
  }

  return (
    <ToastProvider swipeDirection="right" duration={5000}>
      <Button onClick={() => handleToastVisibility(true)}>{buttonText}</Button>
      <ToastRoot open={isVisible} onOpenChange={handleToastVisibility}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        <ToastClose onClick={() => handleToastVisibility(false)} asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
