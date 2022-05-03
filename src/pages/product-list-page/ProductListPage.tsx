import { Component } from 'react'
import { connect } from 'react-redux'
import { Query } from '@apollo/client/react/components'

import Card from 'components/ui/card'
import Grid from 'components/ui/grid/Grid'
import GridItem from 'components/ui/grid/grid-item/GridItem'
import Category from 'components/category/Category'

import {
  ProductPreviewAttributes,
  ProductsPreviewQuery,
  ProductsPreviewQueryData,
  ProductsPreviewQueryVariables,
} from 'graphql-api/queries/products-preview.gql'

import { RootState } from 'redux-store'
import { selectCurrency } from 'redux-store/reducers/currency.slice'
import { sendToCart, SendToCartPayload } from 'redux-store/reducers/cart.slice'

import { findPrice } from 'utils/arrays/find-price'
import { theme } from 'global.styles'
import { Currency, Price } from 'types'
import { Paths } from 'routes'

import { RouteComponentProps } from 'react-router-dom'
import { selectCategory } from 'redux-store/reducers/categories.slice'

interface ProductListPageProps extends RouteComponentProps {
  category: string
  currency: Currency

  sendToCart: (payload: SendToCartPayload) => void
}

class ProductListPage extends Component<ProductListPageProps> {
  handleCardClick = (productId: string) => {
    this.props.history.push(`${Paths.ProductDescriptionPage}/${productId}`)
  }

  handleCartClick = (id: string, attributes: ProductPreviewAttributes, prices: Price[]) => {
    const defaultAttributes = attributes.map(({ id, items }) => ({
      attributeSetId: id,
      attributeId: items[0].id,
    }))

    this.props.sendToCart({
      productId: id,
      selectedAttributes: defaultAttributes,
      prices,
    })
  }

  render() {
    const { category, currency } = this.props
    return (
      <>
        <Category category={category} />
        <Query<ProductsPreviewQueryData, ProductsPreviewQueryVariables>
          query={ProductsPreviewQuery}
          variables={{ title: category }}
        >
          {({ data, loading, error }) => {
            if (loading || error) return null

            return (
              <Grid
                columns={{ desktop: 3, tablet: 2, mobile: 1 }}
                gap={{ desktop: 40, tablet: 20, mobile: 10 }}
                justifyItems="center"
                padding="0 0 40px"
              >
                <>
                  {data.category?.products.map(
                    ({ id, name, brand, gallery, inStock, prices, attributes }) => (
                      <GridItem
                        key={id}
                        hover={{
                          boxShadow: theme.shadow.medium,
                        }}
                      >
                        <Card
                          title={`${brand} ${name}`}
                          imageUrl={gallery[0]}
                          price={findPrice(prices, currency) ?? prices[0]}
                          inStock={inStock}
                          onClick={() => this.handleCardClick(id)}
                          onCartClick={() => this.handleCartClick(id, attributes, prices)}
                        />
                      </GridItem>
                    )
                  )}
                </>
              </Grid>
            )
          }}
        </Query>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currency: selectCurrency(state),
  category: selectCategory(state),
})

const mapDispatchToProps = {
  sendToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
