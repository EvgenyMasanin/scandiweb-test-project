import CartList from 'components/cart-list/CartList'
import Button from 'components/ui/button/Button'
import { Flex } from 'components/ui/flex/'
import { Link } from 'components/ui/link/Link.style'
import Text from 'components/ui/text/Text'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import {
  selectProducts,
  addProduct,
  removeProduct,
  changeAttribute,
  ChangeAttributePayload,
} from 'redux-store/reducers/cart.slice'
import { selectCurrency } from 'redux-store/reducers/currency.slice'
import { Paths } from 'routes'
import { Currency, InCartProduct } from 'types'
import { getTotal } from 'utils/cart/get-total'
import { StyledCartOverlay } from '../CartButton.style'

interface CartOverlayProps {
  inCartProducts: InCartProduct[]
  currency: Currency
  addProduct: (cartItemId: string) => void
  removeProduct: (cartItemId: string) => void
  changeAttribute: (payload: ChangeAttributePayload) => void

  hideOverlay: () => void
}

class CartOverlay extends Component<CartOverlayProps> {
  render() {
    const { inCartProducts, currency, addProduct, changeAttribute, hideOverlay, removeProduct } =
      this.props
    const total = getTotal(inCartProducts, currency)

    return (
      <StyledCartOverlay direction="column" gap={32} maxHeight="70%" overflow="auto">
        <Text as="h3">
          <Text fontSize="16px" fontWeight={700} lineHeight="25.6px">
            My Bag,
          </Text>{' '}
          <Text fontSize="16px" fontWeight={500} lineHeight="25.6px">
            {inCartProducts.length} items
          </Text>
        </Text>

        <CartList
          size="small"
          inCartProducts={inCartProducts}
          onProductAdd={addProduct}
          onProductRemove={removeProduct}
          onProductChangeAttribute={changeAttribute}
        />

        <Flex justifyContent="space-between">
          <Text fontWeight={500} lineHeight="18px" fontFamily="'Roboto', sans-serif">
            Total
          </Text>
          <Text fontWeight={700} lineHeight="18px">
            {currency?.symbol}
            {total.toFixed(2)}
          </Text>
        </Flex>

        <Flex gap={12} justifyContent="space-between" flex="0 0 43px">
          <Link variant="button" to={Paths.CartPage} onClick={hideOverlay}>
            View bag
          </Link>
          <Button>Check out</Button>
        </Flex>
      </StyledCartOverlay>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  inCartProducts: selectProducts(state),
  currency: selectCurrency(state),
})

const mapDispatchToProps = {
  addProduct,
  removeProduct,
  changeAttribute,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
