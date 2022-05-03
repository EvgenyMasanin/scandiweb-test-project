import { Component } from 'react'
import Box from 'components/ui/box'
import Button, { StyledButtonProps } from 'components/ui/button'
import { Flex } from 'components/ui/flex'
import { Image } from 'components/ui/image'

import { ReactComponent as ArrowLeftIcon } from 'assets/svg/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/svg/arrow-right.svg'

interface CartGalleryProps {
  withCarousel?: boolean
  gallery: string[]
  currentImageIndex: number

  handleChangeImage: (direction: number) => () => void
}

class CartGallery extends Component<CartGalleryProps> {
  render() {
    const { handleChangeImage, withCarousel, gallery, currentImageIndex } = this.props

    const buttonStyle: StyledButtonProps = {
      variant: 'ghost',
      background: 'rgba(0, 0, 0, 0.73);',
      width: '24px',
      height: '24px',
      padding: '0',
    }

    return (
      <Box position="relative" width="100%">
        <Image imageUrl={gallery[currentImageIndex]} height="100%" width="100%" />
        {withCarousel && gallery.length > 1 && (
          <Flex position="absolute" down={0} right={0} gap={8}>
            <Button {...buttonStyle} onClick={handleChangeImage(-1)}>
              <ArrowLeftIcon />
            </Button>
            <Button {...buttonStyle} onClick={handleChangeImage(1)}>
              <ArrowRightIcon />
            </Button>
          </Flex>
        )}
      </Box>
    )
  }
}

export default CartGallery
