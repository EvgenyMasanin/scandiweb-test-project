import styled, { css } from 'styled-components'

export type StyledBoxProps = Partial<{
  position: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static' | 'inherit'
  top: string
  down: string
  left: string
  right: string
  zIndex: number
  width: string
  height: string
  minWidth: string
  minHeight: string
  maxWidth: string
  maxHeight: string
  margin: string
  padding: string
  border: string
  outline: string
  borderRadius: string
  backgroundColor: string
  color: string
  overflow: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit'
  flexGrow: number
  flex: string
  alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  cursor: 'pointer' | 'default'
  fontSize: string
  hover: Omit<StyledBoxProps, 'hover'>
}>

export const StyledBox = styled.div<StyledBoxProps>`
  ${props => getCss(props)}
  &:hover {
    ${({ hover }) => getCss(hover)}
  }
`

function getCss(props: StyledBoxProps) {
  if (!props) return ''

  const {
    position,
    down,
    left,
    right,
    top,
    zIndex,
    margin,
    padding,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    color,
    border,
    outline,
    borderRadius,
    backgroundColor,
    overflow,
    flexGrow,
    flex,
    alignSelf,
    fontSize,
    cursor,
  } = props
  return css`
    position: ${position};
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${down};
    z-index: ${zIndex};
    margin: ${margin};
    padding: ${padding};
    width: ${width};
    height: ${height};
    min-width: ${minWidth};
    max-width: ${maxWidth};
    min-height: ${minHeight};
    max-height: ${maxHeight};
    color: ${color};
    border: ${border};
    outline: ${outline};
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
    overflow: ${overflow};
    flex-grow: ${flexGrow};
    flex: ${flex};
    align-self: ${alignSelf};
    font-size: ${fontSize};
    cursor: ${cursor};
  `
}
