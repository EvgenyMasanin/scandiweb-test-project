import { Component } from 'react'
import CardImage from './card-image/CardImage'
import CardPrice from './card-price/CardPrice'
import CardTitle from './card-title/CardTitle'
import { StyledCard, StyledCardOverlay } from './Card.style'
import { Price } from 'types'

interface CardProps {
  title?: string
  imageUrl: string
  price: Price
  inStock?: boolean
  overlayText?: string

  onClick?: () => void

  onCartClick?: () => void
}

class Card extends Component<CardProps> {
  render() {
    const { title, imageUrl, price, inStock, overlayText, onCartClick, onClick } = this.props

    return (
      <StyledCard isOverlay onClick={onClick}>
        {!inStock && <StyledCardOverlay />}
        <CardImage
          isOverlay={!inStock}
          overlayText={overlayText ?? 'Out of stock'}
          url={imageUrl}
          onCartClick={onCartClick}
        />
        <CardTitle title={title} />
        <CardPrice price={price} />
      </StyledCard>
    )
  }
}

export default Card
