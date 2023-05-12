import * as React from 'react'

import { Box } from './Box'
import { BoxStyles } from './Box.css'
import { ButtonHeight, ButtonVariant, buttonHeightStyles } from './Button.css'
import { Text, TextProps } from './Text'

export type ButtonProps = {
  children: string | React.ReactNode
  height?: ButtonHeight
  width?: 'fit' | 'full'
  variant?: ButtonVariant
} & (
  | {
      as?: 'button' | 'div'
      href?: never
      onClick?: () => void
    }
  | {
      as: 'a'
      href: string
      onClick?: never
    }
)

const stylesForHeight = {
  '36px': {
    paddingHorizontal: '12px',
  },
  '44px': {
    paddingHorizontal: '16px',
  },
} satisfies Record<ButtonHeight, BoxStyles>

const stylesForVariant = {
  'solid primary': {
    backgroundColor: {
      default: 'primary',
      hover: 'primaryHover',
    },
  },
  'solid body': {
    backgroundColor: {
      default: 'body',
      hover: 'bodyHover',
    },
  },
  'solid green': {
    backgroundColor: {
      default: 'green',
      hover: 'greenHover',
    },
  },
  'solid red': {
    backgroundColor: {
      default: 'red',
      hover: 'redHover',
    },
    borderWidth: '1.5px',
  },
  'stroked primary': {
    backgroundColor: {
      hover: 'primary / 0.05',
    },
    borderWidth: '1.5px',
  },
  'stroked scrim': {
    backgroundColor: {
      hover: 'primary / 0.02',
    },
    borderColor: 'scrim',
    borderWidth: '1.5px',
  },
  'tint red': {
    backgroundColor: {
      default: 'redTint',
      hover: 'redTintHover',
    },
    borderWidth: '1.5px',
  },
  'tint green': {
    backgroundColor: {
      default: 'greenTint',
      hover: 'greenTintHover',
    },
    borderWidth: '1.5px',
  },
} satisfies Record<ButtonVariant, BoxStyles>

const textStylesForHeight = {
  '36px': {
    size: '15px',
  },
  '44px': {
    size: '18px',
  },
} satisfies Record<ButtonHeight, { size: TextProps['size'] }>

export function Button({
  as = 'button',
  children,
  height = '36px',
  href,
  onClick,
  variant = 'solid primary',
  width = 'full',
}: ButtonProps) {
  return (
    <Box
      as={as}
      href={href}
      onClick={onClick}
      className={buttonHeightStyles[height]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width}
      transform={{
        hoveractive: 'shrink',
      }}
      {...stylesForVariant[variant]}
      {...stylesForHeight[height]}
    >
      <Text {...textStylesForHeight[height]}>{children}</Text>
    </Box>
  )
}
