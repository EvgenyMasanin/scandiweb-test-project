import { Component, MouseEvent, ReactNode } from 'react'
import { isNumber } from 'types/utils'
import { StyledBox, StyledBoxProps } from './Box.style'

type PixelPropNames =
  | 'top'
  | 'right'
  | 'down'
  | 'left'
  | 'width'
  | 'height'
  | 'minWidth'
  | 'minHeight'
  | 'maxWidth'
  | 'maxHeight'
  | 'margin'
  | 'padding'
  | 'borderRadius'

const pixelPropNames = [
  'top',
  'right',
  'down',
  'left',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'margin',
  'padding',
  'borderRadius',
]

type PixelPropsSN = Partial<Record<PixelPropNames, string | number>>

export type BoxProps = Omit<StyledBoxProps, PixelPropNames> &
  PixelPropsSN & {
    children?: ReactNode
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
  }

class Box extends Component<BoxProps> {
  isPixelProp = (prop: string): prop is PixelPropNames => pixelPropNames.includes(prop)

  render() {
    const pixelProps: Record<PixelPropNames, string> = {} as Record<PixelPropNames, string>

    Object.entries(this.props).forEach(([propName, value]) => {
      if (this.isPixelProp(propName)) {
        if (isNumber(value)) pixelProps[propName] = `${value}px`
      }
    })

    const newProps = { ...this.props, ...pixelProps }

    return (
      <StyledBox className="BOX" {...newProps}>
        {this.props.children}
      </StyledBox>
    )
  }
}

export default Box
