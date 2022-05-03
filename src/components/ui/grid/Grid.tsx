import { Component, ReactNode } from 'react'
import { Breakpoints } from 'types/breakpoints.types'
import { isNumber, isString } from 'types/utils'
import { toPixels } from 'utils/strings/to-pixels'
import { BoxProps } from '../box/Box'
import { StyledGrid } from './Grid.style'

export interface GridProps extends BoxProps {
  columns: number | Partial<Record<keyof Breakpoints, number>>
  gap?: number | string | Partial<Record<keyof Breakpoints, number | string>>
  justifyItems?: 'start' | 'center' | 'end' | 'stretch'
  children: ReactNode
}

class Grid extends Component<GridProps> {
  static defaultProps = {
    gap: 0,
  }

  render() {
    const { gap, ...props } = this.props

    const formattedGap: string | Partial<Record<keyof Breakpoints, string>> = isNumber(gap)
      ? toPixels(gap)
      : isString(gap)
      ? gap
      : {
          desktop: isNumber(gap.desktop) ? toPixels(gap.desktop) : gap.desktop,
          tablet: isNumber(gap.tablet) ? toPixels(gap.tablet) : gap.tablet,
          mobile: isNumber(gap.mobile) ? toPixels(gap.mobile) : gap.mobile,
        }

    return (
      <StyledGrid gap={formattedGap} {...props}>
        {this.props.children}
      </StyledGrid>
    )
  }
}

export default Grid
