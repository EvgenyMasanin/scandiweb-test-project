import { Component, MouseEvent, ReactNode } from 'react'
import { ButtonComponentVariants, getButtonComponent, StyledButtonProps } from './Button.style'

interface ButtonProps extends StyledButtonProps {
  as: ButtonComponentVariants

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled: boolean

  children: ReactNode
}

class Button extends Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
    variant: 'solid',
  }

  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    const { children, ...props } = this.props

    const StyledButton = getButtonComponent(this.props.as ?? 'button')

    return <StyledButton {...props}>{children}</StyledButton>
  }
}

export default Button
