import { Component, createRef, RefObject } from 'react'
import { StyledCartButton, StyledCartOverlayBackground } from './CartButton.style'

import { ReactComponent as CartIcon } from 'assets/svg/cart-icon.svg'
import Notification from 'components/ui/notification/Notification'
import CartOverlay from './cart-overlay/CartOverlay'
import { ModalService } from 'services/modal.service'
import { Flex } from 'components/ui/flex'
import { connect } from 'react-redux'
import { RootState } from 'redux-store'
import { selectProductsCount } from 'redux-store/reducers/cart.slice'

interface CartButtonProps {
  productsInCart: number
}

interface CartButtonState {
  isOpen: boolean
}

class CartButton extends Component<CartButtonProps, CartButtonState> {
  overlay: RefObject<HTMLDivElement>

  constructor(props: CartButtonProps) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.overlay = createRef<HTMLDivElement>()
  }

  componentDidUpdate(): void {
    if (this.state.isOpen) {
      ModalService.onOutsideClick(this.overlay.current, this.handleOutsideClick)
    } else {
      ModalService.removeListener(this.handleOutsideClick)
    }
  }

  componentWillUnmount(): void {
    ModalService.removeListener(this.handleOutsideClick)
  }

  handleOutsideClick = () => this.setState({ isOpen: false })

  handleClick = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }))
  }

  hideOverlay = () => this.setState({ isOpen: false })

  render() {
    return (
      <div ref={this.overlay}>
        <Flex>
          <StyledCartButton onClick={this.handleClick}>
            <Notification notificationCount={this.props.productsInCart}>
              <CartIcon />
            </Notification>
          </StyledCartButton>
          {this.state.isOpen && (
            <>
              <CartOverlay hideOverlay={this.hideOverlay} />
              <StyledCartOverlayBackground onClick={this.handleOutsideClick} />
            </>
          )}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  productsInCart: selectProductsCount(state),
})

export default connect(mapStateToProps)(CartButton)
