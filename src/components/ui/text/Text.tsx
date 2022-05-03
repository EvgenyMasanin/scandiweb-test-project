import { Component, ReactNode } from 'react'
import { getTextComponent, StyledTextProps, TextComponentVariants } from './Text.style'

interface TextProps extends StyledTextProps {
  as?: TextComponentVariants
  children?: ReactNode
}

class Text extends Component<TextProps> {
  render() {
    const Text = getTextComponent(this.props.as || 'span')

    return <Text {...this.props}>{this.props.children ?? ''}</Text>
  }
}

export default Text
