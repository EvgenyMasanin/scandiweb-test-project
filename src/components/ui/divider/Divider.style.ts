import styled from 'styled-components'

interface DividerProps {
  margin?: string
}

export const Divider = styled.hr<DividerProps>`
  color: transparent;

  margin: ${props => props.margin || '1px 0'};
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`
