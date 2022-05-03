import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;

  background-color: ${({ theme }) => theme.colors.white};

  height: 76px;

  display: flex;
  align-items: stretch;

  padding-top: 24px;
`

export const StyledNavigation = styled.div`
  display: flex;
  overflow: auto;

  flex: 1 1 47.5%;
`

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1 1 5%;

  align-self: center;
`

export const StyledHeaderActions = styled.div`
  display: flex;
  flex: 1 1 47.5%;
  justify-content: flex-end;

  align-items: center;
  gap: 20px;
`
