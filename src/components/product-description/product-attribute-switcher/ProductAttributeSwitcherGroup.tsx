import { Component } from 'react'
import ProductAttributeSwitcher from './ProductAttributeSwitcher'
import { Attribute, AttributeSet, SelectedAttribute, Size } from 'types'

interface ProductAttributeSwitcherGroupProps {
  attributes: AttributeSet[]
  selectedAttributes: SelectedAttribute[]
  size?: Size
  onChangeAttribute: (attributeSetId: string) => (attribute: Attribute) => void
}

class ProductAttributeSwitcherGroup extends Component<ProductAttributeSwitcherGroupProps> {
  static defaultProps: Partial<ProductAttributeSwitcherGroupProps> = {
    size: 'medium',
  }

  render() {
    const { attributes, selectedAttributes, size, onChangeAttribute } = this.props

    return (
      <>
        {attributes.map(({ id, items, type, name }) => {
          const selectedAttribute = selectedAttributes.find(
            ({ attributeSetId }) => attributeSetId === id
          )

          return (
            <ProductAttributeSwitcher
              key={id}
              size={size}
              attributeType={type}
              title={name}
              attributes={items}
              selectedAttributeId={selectedAttribute.attributeId}
              onSwitch={onChangeAttribute(id)}
            />
          )
        })}
      </>
    )
  }
}

export default ProductAttributeSwitcherGroup
