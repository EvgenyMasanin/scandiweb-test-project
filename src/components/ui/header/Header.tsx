import { Component, ReactElement } from 'react'
import { StyledHeader, StyledLogo } from './Header.style'
import Navigation, { ID, Link } from './navigation/Navigation'

import HeaderActions from './header-actions/HeaderActions'

interface HeaderProps<T extends ID = string> {
  links: Link<T>[]

  Logo: ReactElement
  actions: ReactElement

  onLinkClick?: (link: Link<T>) => void
}

class Header<T extends ID = string> extends Component<HeaderProps<T>> {
  render() {
    const { Logo, links, onLinkClick, actions } = this.props

    return (
      <StyledHeader>
        <Navigation links={links} onLinkClick={onLinkClick} />
        <StyledLogo>{Logo}</StyledLogo>
        <HeaderActions>{actions}</HeaderActions>
      </StyledHeader>
    )
  }
}

export default Header
