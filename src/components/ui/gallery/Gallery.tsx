import { Component } from 'react'
import Box from '../box'
import Grid from '../grid/Grid'
import GridItem from '../grid/grid-item/GridItem'
import Image from './main-image/MainImage'

interface GalleryProps {
  imageUrls: string[]
  imageHeight: number
  imageWidth: number
  direction?: 'row' | 'column'

  onImageClick?: (imageUrl: string) => void
}

class Gallery extends Component<GalleryProps> {
  static defaultProps = {
    direction: 'row',
  }

  handleClick = (imageUrl: string) => () => {
    this.props.onImageClick?.(imageUrl)
  }

  render() {
    const { imageHeight, imageUrls, imageWidth, direction } = this.props

    return (
      <Grid columns={direction === 'column' ? 1 : imageUrls.length} gap={32}>
        {imageUrls.map(imageUrl => (
          <GridItem key={imageUrl} hover={{ opacity: 0.7, cursor: 'pointer' }}>
            <Box onClick={this.handleClick(imageUrl)}>
              <Image imageUrl={imageUrl} height={imageHeight} width={imageWidth} />
            </Box>
          </GridItem>
        ))}
      </Grid>
    )
  }
}

export default Gallery
