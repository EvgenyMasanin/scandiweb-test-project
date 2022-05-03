import { Component, MouseEvent } from 'react'
import { Flex } from 'components/ui/flex'
import Text from 'components/ui/text/Text'
import ProductAttributeSwitcherGroup from 'components/product-description/product-attribute-switcher/ProductAttributeSwitcherGroup'
import CartItemActions from './CartItemActions'
import CartGallery from './CartGallery'

import { Attribute, Currency, InCartProduct, Product, Size, SizeModifierMap } from 'types'
import { Paths } from 'routes'
import Box from 'components/ui/box'
import { theme } from 'global.styles'
import { Link } from 'components/ui/link/Link.style'
import Button from 'components/ui/button'

interface CartItemProps {
  inCartProduct: InCartProduct
  product: Product
  currency: Currency
  withCarousel?: boolean
  withProductLink?: boolean

  onProductAdd: (cartItemId: string) => void
  onProductRemove: (cartItemId: string) => void
  onChangeAttribute: (attributeSetId: string) => (attribute: Attribute) => void

  size?: Size
}

interface CartItemState {
  currentImageIndex: number
}

class CartItem extends Component<CartItemProps, CartItemState> {
  constructor(props: CartItemProps) {
    super(props)

    this.state = { currentImageIndex: 0 }
  }

  handleAddProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.props.onProductAdd(this.props.inCartProduct.cartItemId)
  }
  handleRemoveProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.props.onProductRemove(this.props.inCartProduct.cartItemId)
  }

  handleChangeImage = (direction: number) => () => {
    const galleryLength = this.props.product.gallery.length

    const calculatedIndex = this.state.currentImageIndex + direction

    let newIndex = calculatedIndex
    if (calculatedIndex < 0) newIndex = galleryLength - 1
    if (calculatedIndex > galleryLength - 1) newIndex = 0

    this.setState({ currentImageIndex: newIndex })
  }

  render() {
    const {
      product: { id, brand, name, prices, attributes, gallery },
      inCartProduct: { count, selectedAttributes },
      size,
      onChangeAttribute,
      withCarousel,
      currency,
      withProductLink,
    } = this.props

    const sizeModifier = SizeModifierMap[size]

    const productNameFontSize = `${15 * sizeModifier}px`

    const priceFontSize = `${12 * sizeModifier}px`

    const currentPrice = prices.find(price => price.currency.label === currency?.label)

    return (
      <Flex gap={10}>
        <Flex direction="column" gap={10} flex="1 1 50%">
          <Text fontWeight={600} fontSize={productNameFontSize}>
            {brand}
          </Text>
          <Text fontSize={productNameFontSize}>{name}</Text>
          <Text fontWeight={700} fontSize={priceFontSize}>
            {currentPrice?.currency.symbol}
            {currentPrice?.amount}
          </Text>
          <ProductAttributeSwitcherGroup
            selectedAttributes={selectedAttributes}
            attributes={attributes}
            onChangeAttribute={onChangeAttribute}
            size={size}
          />
          {withProductLink && (
            <Box padding="20px 0 0">
              <Link to={`${Paths.ProductDescriptionPage}/${id}`}>View product</Link>
            </Box>
          )}
        </Flex>
        <Flex flex={`1 1 ${size === 'medium' ? 'auto' : '40%'}`} gap={5}>
          <CartItemActions
            productCount={count}
            size={size}
            handleAddProduct={this.handleAddProduct}
            handleRemoveProduct={this.handleRemoveProduct}
          />
          <CartGallery
            withCarousel={withCarousel}
            gallery={gallery}
            currentImageIndex={this.state.currentImageIndex}
            handleChangeImage={this.handleChangeImage}
          />
        </Flex>
      </Flex>
    )
  }
}

export default CartItem
