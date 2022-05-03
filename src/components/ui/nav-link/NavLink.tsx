import { Component } from 'react'
import { ID, Link } from '../header/navigation/Navigation'
import { StyledNavLink } from './NavLink.style'

export interface NavLinkProps<T extends ID = string> {
  link: Link<T>

  onClick: (link: Link<T>) => void
}

class NavLink<T extends ID = string> extends Component<NavLinkProps<T>> {
  handleClick = () => {
    const { link, onClick } = this.props

    onClick(link)
  }

  render() {
    const {
      link: { label, isActive },
    } = this.props

    return (
      <StyledNavLink isActive={isActive} onClick={this.handleClick}>
        {label}
      </StyledNavLink>
    )
  }
}

export default NavLink
