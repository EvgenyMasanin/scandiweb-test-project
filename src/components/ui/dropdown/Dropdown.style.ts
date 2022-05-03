import styled from 'styled-components'

export const StyledDropdown = styled.div`
  position: relative;
`

export const StyledDropdownButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-size: 18px;
  line-height: 28.8px;
  font-weight: 500;

  cursor: pointer;
`

interface StyledDropdownIconProps {
  isOpen: boolean
}

export const StyledDropdownIcon = styled.div<StyledDropdownIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  transition: transform 0.2s ease-in-out;
`

export const StyledDropdownContent = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  list-style: none;
  padding: 20px 0;
  z-index: 100;

  background-color: #ffff;

  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`

export interface StyledDropdownItemProps {
  isSelected: boolean
}

export const StyledDropdownItem = styled.li<StyledDropdownItemProps>`
  height: 45px;

  display: flex;
  justify-content: start;
  align-items: center;

  white-space: nowrap;

  padding: 0 40px 0 20px;

  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#EEEEEE' : '#F5F5F5')};
  }

  background-color: ${({ isSelected }) => (isSelected ? '#EEEEEE' : 'transparent')};
`
