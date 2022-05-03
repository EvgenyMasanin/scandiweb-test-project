import { InCartProduct, SelectedAttribute } from 'types'

interface ProductToSearchInCart {
  id: string
  selectedAttributes: SelectedAttribute[]
}

type IsProductInCart = (
  inCartProducts: InCartProduct[],
  productToSearchInCart: ProductToSearchInCart
) => boolean

export const isProductInCart: IsProductInCart = (inCartProducts, productToSearchInCart) => {
  return !!inCartProducts.find(({ productId: id, selectedAttributes }) => {
    if (id !== productToSearchInCart.id) return false

    return selectedAttributes.every(({ attributeSetId, attributeId }) => {
      const selectedAttribute = productToSearchInCart.selectedAttributes.find(
        ({ attributeSetId: id }) => id === attributeSetId
      )
      if (!selectedAttribute) return false

      return attributeId === selectedAttribute.attributeId
    })
  })
}
