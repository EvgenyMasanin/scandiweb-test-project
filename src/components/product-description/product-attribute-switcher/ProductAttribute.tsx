import { Component, MouseEvent } from 'react'
import Text from 'components/ui/text/Text'
import { Flex } from 'components/ui/flex'
import { theme } from 'global.styles'
import { Attribute, AttributeType } from 'types'
import { Size, SizeModifierMap } from 'types/size.types'
import Box from 'components/ui/box'

interface ProductAttributeProps {
  attributeType: AttributeType
  attribute: Attribute
  isSelected: boolean

  size: Size

  onClick: (attribute: Attribute) => void
}

class ProductAttribute extends Component<ProductAttributeProps> {
  handleClick = (e: MouseEvent<HTMLDivElement>) => {
    this.props.onClick(this.props.attribute)
    e.stopPropagation()
  }

  render() {
    const { isSelected, attributeType, attribute, size } = this.props

    const isWhite = attribute.displayValue === 'White'

    const outlineColor = isSelected ? theme.colors.primary : 'transparent'

    const sizeModifier = SizeModifierMap[size]

    return (
      <>
        {attributeType === 'swatch' ? (
          <Box outline={`2px solid ${outlineColor}`} border={`1px solid ${theme.colors.white}`}>
            <Box
              height={16 * sizeModifier}
              width={16 * sizeModifier}
              border={`1px solid ${isWhite ? theme.colors.primaryFont : attribute.displayValue}`}
              backgroundColor={attribute.displayValue}
              cursor="pointer"
              onClick={this.handleClick}
            />
          </Box>
        ) : (
          <Flex
            border={`1px solid ${theme.colors.primaryFont}`}
            backgroundColor={isSelected ? theme.colors.primaryFont : 'transparent'}
            color={isSelected ? theme.colors.white : theme.colors.primaryFont}
            padding={`${5 * sizeModifier}px ${10 * sizeModifier}px`}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            hover={{
              backgroundColor: theme.colors.primaryFont,
              color: theme.colors.white,
            }}
            onClick={this.handleClick}
          >
            <Text whiteSpace="nowrap" fontSize={size === 'small' ? '14px' : 'inherit'}>
              {attribute.displayValue}
            </Text>
          </Flex>
        )}
      </>
    )
  }
}

export default ProductAttribute
