import { Query } from '@apollo/client/react/components'
import { Divider } from 'components/ui/divider'
import { Flex } from 'components/ui/flex'
import {
  ProductQuery,
  ProductQueryData,
  ProductQueryVariables,
} from 'graphql-api/queries/product.gql'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import { ChangeAttributePayload } from 'redux-store/reducers/cart.slice'
import { selectCurrency } from 'redux-store/reducers/currency.slice'
import { Attribute, Currency, InCartProduct } from 'types'
import { Size } from 'types/size.types'
import CartItem from './cart-item/CartItem'

interface CartListProps {
  inCartProducts: InCartProduct[]
  withGallery?: boolean
  currency: Currency
  withProductLink?: boolean

  onProductAdd: (cartItemId: string) => void
  onProductRemove: (cartItemId: string) => void
  onProductChangeAttribute: (payload: ChangeAttributePayload) => void

  size?: Size
}

class CartList extends Component<CartListProps> {
  handleChangeAttribute =
    (cartItemId: string) =>
    (attributeSetId: string) =>
    ({ id }: Attribute) => {
      const { onProductChangeAttribute } = this.props

      onProductChangeAttribute({ attributeId: id, attributeSetId, cartItemId })
    }

  render() {
    const {
      inCartProducts,
      size,
      onProductAdd,
      onProductRemove,
      withGallery,
      currency,
      withProductLink,
    } = this.props

    return (
      <Flex direction="column" gap={24}>
        {inCartProducts.map(inCartProduct => (
          <Query<ProductQueryData, ProductQueryVariables>
            key={inCartProduct.cartItemId}
            query={ProductQuery}
            variables={{
              productId: inCartProduct.productId,
            }}
          >
            {({ data, loading, error }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>Error</div>

              const { product } = data

              return (
                <>
                  <CartItem
                    size={size ?? 'medium'}
                    inCartProduct={inCartProduct}
                    product={product}
                    currency={currency}
                    onProductAdd={onProductAdd}
                    onProductRemove={onProductRemove}
                    onChangeAttribute={this.handleChangeAttribute(inCartProduct.cartItemId)}
                    withCarousel={withGallery}
                    withProductLink={withProductLink}
                  />
                  <Divider />
                </>
              )
            }}
          </Query>
        ))}
      </Flex>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currency: selectCurrency(state),
})

export default connect(mapStateToProps)(CartList)
