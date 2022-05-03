import styled from 'styled-components'
import Box from '../box'

export interface FlexProps {
  direction?: 'row' | 'column'

  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

  wrap?: 'wrap' | 'nowrap'
  gap?: number
}

export const Flex = styled(Box)<FlexProps>`
  display: flex;

  flex-direction: ${({ direction }) => direction || 'row'};

  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  gap: ${({ gap }) => gap || 0}px;
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`
