import { theme } from 'global.styles'
import styled from 'styled-components'

export type ButtonVariants = 'outlined' | 'solid' | 'ghost'

type VariantsMap = Record<ButtonVariants, string>

const borderVariants: (border?: string) => VariantsMap = border => ({
  solid: border ?? 'none',
  ghost: border ?? 'none',
  outlined: border ?? `1px solid ${theme.colors.primaryFont}`,
})

const colorVariants: (color: string) => VariantsMap = color => ({
  solid: color ?? theme.colors.white,
  ghost: color ?? theme.colors.primaryFont,
  outlined: color ?? theme.colors.primaryFont,
})

const backgroundColorVariants: (bgColor: string) => VariantsMap = bgColor => ({
  solid: bgColor ?? theme.colors.primary,
  ghost: bgColor ?? 'transparent',
  outlined: bgColor ?? 'transparent',
})

export interface StyledButtonProps {
  variant: ButtonVariants
  width?: string
  height?: string
  padding?: string
  background?: string
  color?: string
  border?: string
}

export type ButtonComponentVariants = 'button' | 'a'

export const getButtonComponent = (variant: ButtonComponentVariants) => {
  return styled(variant)<StyledButtonProps>`
    outline: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${props => props.padding || '0.5rem 1rem'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

    font-size: inherit;
    font-weight: 600;
    line-height: 16.8px;

    cursor: pointer;

    text-transform: capitalize;

    border: ${({ variant, border }) => borderVariants(border)[variant]};

    color: ${({ variant, color }) => colorVariants(color)[variant]};

    background: ${({ variant, background }) => backgroundColorVariants(background)[variant]};

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `
}
