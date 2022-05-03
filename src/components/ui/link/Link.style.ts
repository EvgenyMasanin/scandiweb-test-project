import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export interface StyledLinkProps {
  variant?: 'link' | 'button'
}

export const Link = styled(NavLink)<StyledLinkProps>`
  color: ${({ theme }) => theme.colors.primaryFont};

  ${({ variant, theme }) =>
    variant === 'button' &&
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.5rem 1rem;
      border: 1px solid ${theme.colors.primaryFont};
    `};

  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;

  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`
