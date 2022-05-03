import { Component, ReactElement } from 'react'
import { StyledNotification, StyledNotificationContainer } from './Notification.style'

interface NotificationProps {
  notificationCount?: number
  children: ReactElement
}

class Notification extends Component<NotificationProps> {
  render() {
    const { notificationCount, children } = this.props

    return (
      <StyledNotificationContainer>
        {notificationCount > 0 && <StyledNotification>{notificationCount}</StyledNotification>}
        {children}
      </StyledNotificationContainer>
    )
  }
}

export default Notification
