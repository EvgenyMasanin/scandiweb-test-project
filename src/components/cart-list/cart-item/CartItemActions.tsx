import { Component, MouseEvent } from 'react'
import { Flex } from 'components/ui/flex'
import Text from 'components/ui/text/Text'
import Button, { StyledButtonProps } from 'components/ui/button'
import { ReactComponent as PlusIcon } from 'assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from 'assets/svg/minus.svg'
import { Size, SizeModifierMap } from 'types/size.types'

interface CartItemActionsProps {
  size: Size
  productCount: number

  handleAddProduct: (e: MouseEvent<HTMLButtonElement>) => void
  handleRemoveProduct: (e: MouseEvent<HTMLButtonElement>) => void
}

class CartItemActions extends Component<CartItemActionsProps> {
  render() {
    const { size, handleAddProduct, handleRemoveProduct, productCount } = this.props

    const sizeModifier = SizeModifierMap[size]

    const buttonStyle: StyledButtonProps = {
      variant: 'outlined',
      padding: '20%',
      height: `${23 * sizeModifier}px`,
      width: `${23 * sizeModifier}px`,
    }

    return (
      <Flex direction="column" justifyContent="space-between" alignItems="center">
        <Button {...buttonStyle} onClick={handleAddProduct}>
          <PlusIcon />
        </Button>
        <Text>{productCount}</Text>
        <Button {...buttonStyle} onClick={handleRemoveProduct}>
          <MinusIcon />
        </Button>
      </Flex>
    )
  }
}

export default CartItemActions
