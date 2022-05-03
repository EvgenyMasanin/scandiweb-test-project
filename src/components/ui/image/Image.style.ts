import styled from 'styled-components'
import Box, { BoxProps } from '../box'

export interface StyledMainImageProps extends BoxProps {
  imageUrl: string
  backgroundSize?: 'cover' | 'contain' | 'auto'
  backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'
}

export const Image = styled(Box)<StyledMainImageProps>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: ${({ backgroundSize }) => backgroundSize || 'contain'};
  background-repeat: no-repeat;
  background-position: ${({ backgroundPosition }) => backgroundPosition || 'center'};
`
