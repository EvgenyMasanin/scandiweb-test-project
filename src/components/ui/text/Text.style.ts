import styled from 'styled-components'

export type TextComponentVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export interface StyledTextProps {
  color?: string
  fontSize?: string
  fontWeight?: number
  fontFamily?: string
  lineHeight?: string

  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'

  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'inherit'

  margin?: string
}

export const getTextComponent = (variant: TextComponentVariants) => {
  return styled(variant)<StyledTextProps>`
    font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
    font-weight: ${({ fontWeight }) => fontWeight || '400'};
    line-height: ${({ lineHeight }) => lineHeight};
    color: ${({ color }) => color || 'inherit'};
    text-transform: ${({ textTransform }) => textTransform || 'none'};
    white-space: ${({ whiteSpace }) => whiteSpace || 'normal'};
    margin: ${({ margin }) => margin || '0'};
  `
}
