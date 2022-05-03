import { Component } from 'react'
import Text from 'components/ui/text/Text'
import { Flex } from 'components/ui/flex'
import ProductAttribute from './ProductAttribute'
import { Attribute, AttributeType } from 'types'

interface ProductAttributeSwitcherProps {
  attributes: Attribute[]
  attributeType: AttributeType
  title: string
  selectedAttributeId?: string

  size?: 'small' | 'medium'

  onSwitch?: (attribute: Attribute) => void
}

interface ProductAttributeSwitcherState {
  selectedAttributeId: string
}

class ProductAttributeSwitcher extends Component<
  ProductAttributeSwitcherProps,
  ProductAttributeSwitcherState
> {
  constructor(props: ProductAttributeSwitcherProps) {
    super(props)
    this.state = {
      selectedAttributeId: props.selectedAttributeId ?? props.attributes[0].id,
    }
  }

  handleClick = (attribute: Attribute) => {
    this.props.onSwitch?.(attribute)
    if (this.props.selectedAttributeId) return
    this.setState({ selectedAttributeId: attribute.id })
  }

  static getDerivedStateFromProps(
    nextProps: ProductAttributeSwitcherProps,
    prevState: ProductAttributeSwitcherState
  ) {
    if (!nextProps.selectedAttributeId) return prevState
    return { selectedAttributeId: nextProps.selectedAttributeId }
  }

  render() {
    const { title, attributes, size, attributeType } = this.props
    return (
      <Flex direction="column" gap={10} wrap="wrap">
        <Text fontSize="18px" fontWeight={size === 'medium' ? 700 : 300} lineHeight="18px">
          {title}:
        </Text>
        <Flex gap={12} alignItems="center" wrap="wrap" padding=" 0 0 0 2px">
          {attributes.map(attribute => (
            <ProductAttribute
              key={attribute.id}
              size={size ?? 'medium'}
              attributeType={attributeType}
              attribute={attribute}
              isSelected={this.state.selectedAttributeId === attribute.id}
              onClick={this.handleClick}
            />
          ))}
        </Flex>
      </Flex>
    )
  }
}

export default ProductAttributeSwitcher
