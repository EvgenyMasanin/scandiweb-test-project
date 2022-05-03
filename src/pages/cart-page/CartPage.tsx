import { Component } from 'react'
import { connect } from 'react-redux'
import Text from 'components/ui/text/Text'
import { Flex } from 'components/ui/flex'
import CartList from 'components/cart-list/CartList'
import { Divider } from 'components/ui/divider'
import { RootState } from 'redux-store'
import {
  selectProducts,
  addProduct,
  removeProduct,
  changeAttribute,
  ChangeAttributePayload,
  selectProductsCount,
} from 'redux-store/reducers/cart.slice'
import { Currency, InCartProduct } from 'types'
import Button from 'components/ui/button/Button'
import Box from 'components/ui/box'
import { selectCurrency } from 'redux-store/reducers/currency.slice'
import { getTotal } from 'utils/cart/get-total'

interface CartPageProps {
  inCartProducts: InCartProduct[]
  productsCount: number
  currency: Currency
  addProduct: (cartItemId: string) => void
  removeProduct: (cartItemId: string) => void
  changeAttribute: (payload: ChangeAttributePayload) => void
}

class CartPage extends Component<CartPageProps> {
  render() {
    const { currency, inCartProducts, productsCount, addProduct, removeProduct, changeAttribute } =
      this.props

    const taxValue = 5

    const total = getTotal(inCartProducts, currency)

    const tax = ((total * taxValue) / 100).toFixed(2)

    return (
      <Flex direction="column" margin="0 0 40px">
        <Text
          as="h2"
          margin="0 0 55px"
          fontWeight={700}
          fontSize="32px"
          lineHeight="40px"
          textTransform="uppercase"
        >
          cart
        </Text>
        <Divider margin="0 0 24px" />

        <CartList
          withGallery
          withProductLink
          inCartProducts={inCartProducts}
          onProductAdd={addProduct}
          onProductRemove={removeProduct}
          onProductChangeAttribute={changeAttribute}
        />

        <Text margin="32px 0 8px" fontSize="24px" lineHeight="28px">
          <Text>Tax {taxValue}%: </Text>
          <Text fontWeight={700}>
            {currency?.symbol}
            {tax}
          </Text>
        </Text>
        <Text margin="0 0 24px" fontSize="24px" lineHeight="28px">
          <Text>Quantity: </Text>
          <Text fontWeight={700}>{productsCount}</Text>
        </Text>
        <Text margin="0 0 16px" fontSize="24px" lineHeight="28px">
          <Text>Total: </Text>
          <Text fontWeight={700}>{total}</Text>
        </Text>
        <Box maxWidth={280}>
          <Button>order</Button>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  inCartProducts: selectProducts(state),
  productsCount: selectProductsCount(state),
  currency: selectCurrency(state),
})

const mapDispatchToProps = {
  addProduct,
  removeProduct,
  changeAttribute,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
