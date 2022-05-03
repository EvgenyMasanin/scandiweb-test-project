import { Component } from 'react'
import { StyledCardTitle } from '../Card.style'

interface CardTitleProps {
  title: string
}

class CardTitle extends Component<CardTitleProps> {
  render() {
    return <StyledCardTitle>{this.props.title}</StyledCardTitle>
  }
}

export default CardTitle
