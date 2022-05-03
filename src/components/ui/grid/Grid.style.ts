import { GridItemProps } from './grid-item/GridItem'
import { isString } from 'types/utils'
import styled, { css } from 'styled-components'
import { Breakpoints } from 'types/breakpoints.types'
import { GridProps } from './Grid'
import Box from '../box'

type StyledGridProps = Omit<GridProps, 'gap'> & {
  gap?: string | Partial<Record<keyof Breakpoints, string>>
}

export const StyledGrid = styled(Box)<StyledGridProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: grid;
  justify-items: ${({ justifyItems }) => justifyItems};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: ${({ gap }) => (isString(gap) ? gap : gap?.desktop)};

    grid-template-columns: repeat(
      ${({ columns }) => {
        return typeof columns === 'number' ? columns : columns.desktop
      }},
      1fr
    );
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: ${({ gap }) => (isString(gap) ? gap : gap?.tablet)};

    grid-template-columns: repeat(
      ${({ columns }) => {
        return typeof columns === 'number' ? columns : columns.tablet
      }},
      1fr
    );
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    gap: ${({ gap }) => (isString(gap) ? gap : gap?.mobile)};

    grid-template-columns: repeat(
      ${({ columns }) => {
        return typeof columns === 'number' ? columns : columns.mobile
      }},
      1fr
    );
  }
`

export const StyledGridItem = styled.div<GridItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: 100%;

  &:hover {
    ${({ hover }) => css`
      box-shadow: ${hover?.boxShadow};
      opacity: ${hover?.opacity};
      cursor: ${hover?.cursor};
    `}
  }
`
