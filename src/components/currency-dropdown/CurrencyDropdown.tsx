import Dropdown from 'components/ui/dropdown'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import {
  changeCurrency,
  selectCurrencies,
  selectCurrency,
} from 'redux-store/reducers/currency.slice'
import { Currency } from 'types/queries/currency.types'

interface CurrencyDropdownProps {
  currencies: Currency[]
  currency: Currency
  changeCurrency: (currency: Currency) => void
}

class CurrencyDropdown extends Component<CurrencyDropdownProps> {
  formatSelectedLabel = (item: Currency) => item.symbol

  formatItemLabel = ({ label, symbol }: Currency) => `${symbol} ${label}`

  handleSelect = (item: Currency) => this.props.changeCurrency(item)

  render() {
    const { currencies, currency } = this.props

    return (
      <Dropdown
        items={currencies}
        selectedItem={currency}
        formatSelectedLabel={this.formatSelectedLabel}
        formatItemLabel={this.formatItemLabel}
        onSelect={this.handleSelect}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currencies: selectCurrencies(state),
  currency: selectCurrency(state),
})

const mapDispatchToProps = {
  changeCurrency,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)
