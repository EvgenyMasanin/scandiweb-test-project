import { Flex } from 'components/ui/flex'
import styled from 'styled-components'

export const StyledCartButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  width: 20px;
  height: 20px;
  color: red;

  line-height: 28.8px;

  & svg > * {
    fill: ${({ theme }) => theme.colors.primaryFont};
  }
`

export const StyledCartOverlay = styled(Flex)`
  position: fixed;
  top: 76px;
  right: 72px;

  background: ${({ theme }) => theme.colors.white};

  z-index: 1;

  padding: 32px 16px;
  width: 355px;
`

export const CartTitleCount = styled.span`
  font-weight: 500;
`

export const StyledCartOverlayBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 76px;
  background: rgba(57, 55, 72, 0.22);
`
