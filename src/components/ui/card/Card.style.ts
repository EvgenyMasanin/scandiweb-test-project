import styled from 'styled-components'
import { CardImageProps } from './card-image/CardImage'

export const StyledCardCart = styled.button`
  border: none;
  outline: none;

  position: absolute;
  bottom: 0;
  right: 0;

  &:active {
    transform: translate(-16px, 50%) scale(0.9);
  }

  transform: translate(-16px, 50%);

  display: none;
  justify-content: center;
  align-items: center;

  height: 52px;
  width: 52px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  & > img {
    height: 24px;
    width: 24px;
  }
`

export const StyledCard = styled.div<{ isOverlay: boolean }>`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 444px;
  padding: 11px 16px 16px;

  display: flex;
  flex-direction: column;

  &:hover ${StyledCardCart} {
    display: flex;
  }
`

export const StyledCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`

export const StyledCardOverlayText = styled.div`
  font-size: 24px;
  line-height: 38.8px;
  color: ${({ theme }) => theme.colors.disabled};
  text-transform: capitalize;
`

type StyledCardImageProps = Pick<CardImageProps, 'url' | 'isOverlay'>

export const StyledCardImage = styled.div<StyledCardImageProps>`
  position: relative;
  height: 338px;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledCardTitle = styled.div`
  height: 29px;
  font-size: 18px;
  font-weight: 300;
  line-height: 28.8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const StyledCardPrice = styled.div`
  height: 29px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
`
