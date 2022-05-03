import { Component } from 'react'
import { StyledImage, StyledMainImageProps } from '../Gallery.style'

class Image extends Component<StyledMainImageProps> {
  render() {
    return <StyledImage {...this.props} />
  }
}

export default Image
