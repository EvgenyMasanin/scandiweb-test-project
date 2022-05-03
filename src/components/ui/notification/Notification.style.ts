import styled from 'styled-components'

export const StyledNotification = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  transform: translate(50%, -50%);

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryFont};
  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNotificationContainer = styled.div`
  position: relative;

  display: flex;
`
