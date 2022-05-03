import { Component } from 'react'
import { Price } from 'types/price.types'
import { StyledCardPrice } from '../Card.style'

interface CardPriceProps {
  price: Price
}

class CardPrice extends Component<CardPriceProps> {
  render() {
    const {
      price: {
        amount,
        currency: { symbol },
      },
    } = this.props

    return (
      <StyledCardPrice>
        {symbol}
        {amount}
      </StyledCardPrice>
    )
  }
}

export default CardPrice
