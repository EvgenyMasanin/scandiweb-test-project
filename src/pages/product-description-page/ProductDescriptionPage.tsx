import { Query } from '@apollo/client/react/components'
import ProductDescription from 'components/product-description/ProductDescription'
import Box from 'components/ui/box'
import { Flex } from 'components/ui/flex'
import Gallery from 'components/ui/gallery/Gallery'
import {
  ProductQuery,
  ProductQueryData,
  ProductQueryVariables,
} from 'graphql-api/queries/product.gql'
import { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface ProductDescriptionPageState {
  selectedImageUrl: string
}

class ProductDescriptionPage extends Component<
  RouteComponentProps<{ id: string }>,
  ProductDescriptionPageState
> {
  state = {
    selectedImageUrl: '',
  }

  handleImageClick = (imageUrl: string) => this.setState({ selectedImageUrl: imageUrl })

  render() {
    return (
      <Query<ProductQueryData, ProductQueryVariables>
        query={ProductQuery}
        variables={{ productId: this.props.match.params.id }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error</div>

          const { gallery } = data.product

          const selectedImage = this.state.selectedImageUrl || gallery[0]

          if (!this.state.selectedImageUrl) {
            setTimeout(() => this.setState({ selectedImageUrl: gallery[0] }), 0)
          }

          return (
            <Box height="100%" padding="0 10px 40px">
              <Flex justifyContent="space-between" height="100%" padding="10px 0" gap={100}>
                <Box flexGrow={1} height="100%" minWidth={100} overflow="auto">
                  <Gallery
                    imageHeight={80}
                    imageWidth={80}
                    imageUrls={gallery}
                    direction="column"
                    onImageClick={this.handleImageClick}
                  />
                </Box>
                <Box flexGrow={4}>
                  <ProductDescription product={data.product} image={selectedImage} />
                </Box>
              </Flex>
            </Box>
          )
        }}
      </Query>
    )
  }
}

export default ProductDescriptionPage
