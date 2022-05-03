import { Flex } from 'components/ui/flex/Flex.style'
import Text from 'components/ui/text/Text'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import { selectCurrency } from 'redux-store/reducers/currency.slice'
import { Currency, Price } from 'types'

interface ProductPriceProps {
  currency: Currency
  prices: Price[]
}

class ProductPrice extends Component<ProductPriceProps> {
  render() {
    const { prices, currency } = this.props

    const currentPrice = prices.find(price => price.currency.label === currency?.label)

    return (
      <Flex direction="column" gap={20}>
        <Text
          as="p"
          fontSize="18px"
          fontWeight={700}
          lineHeight="18px"
          fontFamily="'Roboto', sans-serif"
          textTransform="uppercase"
        >
          price:
        </Text>
        <Text as="p" fontSize="24px" lineHeight="18px" fontWeight={700}>
          {currentPrice?.currency.symbol}
          {currentPrice?.amount}
        </Text>
      </Flex>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currency: selectCurrency(state),
})

export default connect(mapStateToProps)(ProductPrice)
