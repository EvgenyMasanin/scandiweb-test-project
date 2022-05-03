import styled from 'styled-components'
import Box, { BoxProps } from '../box'

export const StyledGallery = styled.div`
  height: 100%;
  width: 100%;

  display: flex;

  border: 1px solid red;
`

export interface StyledMainImageProps extends BoxProps {
  imageUrl: string
  backgroundSize?: 'cover' | 'contain' | 'auto'
}

export const StyledImage = styled(Box)<StyledMainImageProps>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: ${({ backgroundSize }) => backgroundSize || 'contain'};
  background-repeat: no-repeat;
  background-position: center;
`
export const StyledSideImages = styled.div`
  flex-grow: 1;
`
