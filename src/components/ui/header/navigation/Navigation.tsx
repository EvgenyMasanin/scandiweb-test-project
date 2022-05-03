import { Component } from 'react'
import { StyledNavigation } from '../Header.style'

import NavLink from 'components/ui/nav-link'

export type ID = string | number

export interface Link<T extends ID = string> {
  id: T
  label: string
  isActive: boolean
}

interface NavigationProps<T extends ID = string> {
  links: Link<T>[]

  onLinkClick?: (link: Link<T>) => void
}

class Navigation<T extends ID = string> extends Component<NavigationProps<T>> {
  handleClick = (link: Link<T>) => this.props.onLinkClick?.(link)

  render() {
    const { links } = this.props

    return (
      <StyledNavigation>
        {links.map(link => (
          <NavLink key={link.id} link={link} onClick={this.handleClick} />
        ))}
      </StyledNavigation>
    )
  }
}

export default Navigation
