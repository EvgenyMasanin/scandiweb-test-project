import { Component } from 'react'
import CardCart from '../card-cart/CardCart'
import { StyledCardImage, StyledCardOverlayText } from '../Card.style'

export interface CardImageProps {
  url: string
  isOverlay?: boolean
  overlayText?: string

  onCartClick?: () => void
}

class CardImage extends Component<CardImageProps> {
  render() {
    const { url, isOverlay, overlayText, onCartClick } = this.props

    return (
      <StyledCardImage url={url} isOverlay={isOverlay}>
        {isOverlay ? (
          <StyledCardOverlayText>{overlayText}</StyledCardOverlayText>
        ) : (
          <CardCart onClick={onCartClick} />
        )}
      </StyledCardImage>
    )
  }
}

export default CardImage
