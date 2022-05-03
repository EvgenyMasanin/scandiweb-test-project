import { Component, MouseEvent } from 'react'
import { StyledCardCart } from '../Card.style'

import CartIcon from 'assets/svg/cart-icon.svg'

interface CardCartProps {
  onClick?: () => void
}

class CardCart extends Component<CardCartProps> {
  handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    this.props.onClick?.()
    e.stopPropagation()
  }

  render() {
    return (
      <StyledCardCart onClick={this.handleClick}>
        <img src={CartIcon} alt="cart" />
      </StyledCardCart>
    )
  }
}

export default CardCart
