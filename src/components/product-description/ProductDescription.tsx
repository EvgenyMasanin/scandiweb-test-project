import { Component } from 'react'
import Box from 'components/ui/box'
import Button from 'components/ui/button/Button'
import { Flex } from 'components/ui/flex'
import Text from 'components/ui/text/Text'
import { Image } from 'components/ui/image'
import ProductTitle from './product-title/ProductTitle'
import ProductPrice from './product-price/ProductPrice'
import HtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { selectProducts, sendToCart, SendToCartPayload } from 'redux-store/reducers/cart.slice'
import { RootState } from 'redux-store'
import { isProductInCart } from 'utils/cart/is-product-in-cart'
import ProductAttributeSwitcherGroup from './product-attribute-switcher/ProductAttributeSwitcherGroup'
import { Attribute, InCartProduct, Product, SelectedAttribute } from 'types'

interface ProductDescriptionProps {
  product: Product
  image: string
  inCartProducts: InCartProduct[]

  sendToCart: (inCartProduct: SendToCartPayload) => void
}

interface ProductDescriptionState {
  selectedAttributes: SelectedAttribute[]
}

class ProductDescription extends Component<ProductDescriptionProps, ProductDescriptionState> {
  constructor(props: ProductDescriptionProps) {
    super(props)

    const selectedAttributes = props.product.attributes.map(attribute => ({
      attributeSetId: attribute.id,
      attributeId: attribute.items[0].id,
    }))

    this.state = {
      selectedAttributes,
    }
  }

  handleSwitch = (attributeSetId: string) => (attribute: Attribute) => {
    const { selectedAttributes } = this.state

    const newSelectedAttributes = selectedAttributes.map(selectedAttribute => {
      if (selectedAttribute.attributeSetId === attributeSetId) {
        return {
          ...selectedAttribute,
          attributeId: attribute.id,
        }
      }
      return selectedAttribute
    })

    this.setState({ selectedAttributes: newSelectedAttributes })
  }

  addToCart = () =>
    this.props.sendToCart({
      productId: this.props.product.id,
      selectedAttributes: [...this.state.selectedAttributes],
      prices: this.props.product.prices,
    })

  render() {
    const {
      product: { id, name, brand, description, prices, attributes, inStock },
      image,
      inCartProducts,
    } = this.props

    const { selectedAttributes } = this.state

    const isInCart = isProductInCart(inCartProducts, { id, selectedAttributes })

    return (
      <Flex gap={80} height="100%">
        <Box flex="1 1 50%">
          <Image
            backgroundPosition="top"
            imageUrl={image}
            height="100%"
            width="100%"
            maxHeight={500}
            maxWidth={500}
          />
        </Box>
        <Box flex="1 1 50%" overflow="auto">
          <Flex direction="column" gap={40}>
            <ProductTitle brand={brand} name={name} />

            <ProductPrice prices={prices} />

            {attributes.length > 0 && (
              <Flex direction="column" gap={24}>
                <ProductAttributeSwitcherGroup
                  selectedAttributes={selectedAttributes}
                  attributes={attributes}
                  onChangeAttribute={this.handleSwitch}
                />
              </Flex>
            )}
            <Box height={52} width={292}>
              {isInCart ? (
                <Text fontWeight={700} fontSize="22px">
                  Already in cart
                </Text>
              ) : (
                <Button disabled={!inStock} onClick={this.addToCart}>
                  {inStock ? 'Add to cart' : 'Out of stock'}
                </Button>
              )}
            </Box>
            <Box>{HtmlParser(description)}</Box>
          </Flex>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  inCartProducts: selectProducts(state),
})

const mapDispatchToProps = {
  sendToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
