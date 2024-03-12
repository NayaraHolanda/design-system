import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const slideIn = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0%)' },
})

const swipeOut = keyframes({
  '0%': { transform: 'translateX(0%))' },
  '100%': { transform: 'translateX(100%)' },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  display: 'flex',
  justifyContent: 'space-between',

  '&[data-state=open]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=closed]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-state=cancel]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-state=end]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',

  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  listStyle: 'none',
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  zIndex: 2147483647,
  outline: 'none',
})
