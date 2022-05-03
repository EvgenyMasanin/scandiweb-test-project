import CartButton from 'components/cart-button/CartButton'
import CurrencyDropdown from 'components/currency-dropdown/CurrencyDropdown'
import { Component } from 'react'

class HeaderActions extends Component {
  render() {
    return (
      <>
        <CurrencyDropdown />
        <CartButton />
      </>
    )
  }
}

export default HeaderActions
