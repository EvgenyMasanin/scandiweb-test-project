import { Component, ReactNode } from 'react'
import { StyledGridItem } from '../Grid.style'

export interface GridItemProps {
  hover?: {
    boxShadow?: string
    opacity?: number
    cursor?: 'pointer' | 'default'
  }
  children?: ReactNode
}

class GridItem extends Component<GridItemProps> {
  render() {
    return <StyledGridItem {...this.props}>{this.props.children}</StyledGridItem>
  }
}

export default GridItem
