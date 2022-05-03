import styled, { css } from 'styled-components'

export interface StyledNavLinkProps {
  isActive?: boolean
}

export const StyledNavLink = styled.a<StyledNavLinkProps>`
  display: inline-block;

  position: static;
  height: 52px;
  padding-left: 16px;
  padding-right: 16px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    `}
`
