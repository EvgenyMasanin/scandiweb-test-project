import { Component, ReactNode } from 'react'
import { StyledHeaderActions } from '../Header.style'

interface HeaderActionsProps {
  children?: ReactNode
}

class HeaderActions extends Component<HeaderActionsProps> {
  render() {
    return <StyledHeaderActions>{this.props.children}</StyledHeaderActions>
  }
}

export default HeaderActions
