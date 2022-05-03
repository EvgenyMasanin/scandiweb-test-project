import { Component } from 'react'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import UiHeader from 'components/ui/header'
import HeaderActions from 'components/header-actions/HeaderActions'
import { Link } from 'components/ui/header/navigation/Navigation'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import {
  selectCategory,
  selectCategoryNames,
  setCategory,
} from 'redux-store/reducers/categories.slice'
import { NavLink } from 'react-router-dom'
import { Paths } from 'routes'

interface HeaderProps {
  categoryNames: string[]
  category: string
  setCategory: (categoryName: string) => void
}

class Header extends Component<HeaderProps> {
  handleLinkClick = (link: Link) => this.props.setCategory(link.label)

  render() {
    const { categoryNames, category } = this.props

    const links: Link<string>[] = categoryNames.map(name => ({
      id: name,
      label: name,
      isActive: name === category,
    }))

    return (
      <UiHeader
        Logo={
          <NavLink to={Paths.ProductListPage}>
            <LogoIcon />
          </NavLink>
        }
        links={links}
        actions={<HeaderActions />}
        onLinkClick={this.handleLinkClick}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  categoryNames: selectCategoryNames(state),
  category: selectCategory(state),
})

const mapDispatchToProps = {
  setCategory: setCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
