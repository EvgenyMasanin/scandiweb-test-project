import { Flex } from 'components/ui/flex/Flex.style'
import Text from 'components/ui/text/Text'
import { Component } from 'react'

interface ProductTitleProps {
  brand: string
  name: string
}

class ProductTitle extends Component<ProductTitleProps> {
  render() {
    const { brand, name } = this.props

    return (
      <Flex direction="column" gap={16}>
        <Text as="p" fontSize="30px" fontWeight={600} lineHeight="27px">
          {brand}
        </Text>
        <Text as="p" fontSize="30px" lineHeight="27px">
          {name}
        </Text>
      </Flex>
    )
  }
}

export default ProductTitle
