import { Component, createRef, RefObject } from 'react'
import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownContent,
  StyledDropdownIcon,
  StyledDropdownItem,
} from './Dropdown.style'

import { ReactComponent as ArrowDownIcon } from 'assets/svg/arrow-down.svg'
import { ModalService } from 'services/modal.service'

interface DropDownItem {
  label: string
}

interface DropdownProps<T> {
  items: T[]
  selectedItem: T

  formatSelectedLabel?: (item: T) => string
  formatItemLabel?: (item: T) => string

  onSelect?: (item: T) => void
}

interface DropdownState<T> {
  isOpen: boolean

  selectedItem: T
  items: T[]
}

class Dropdown<T extends DropDownItem> extends Component<DropdownProps<T>, DropdownState<T>> {
  overlay: RefObject<HTMLDivElement>

  constructor(props: DropdownProps<T>) {
    super(props)

    this.state = {
      isOpen: false,
      selectedItem: props.items[0],
      items: props.items,
    }

    this.overlay = createRef<HTMLDivElement>()
  }

  static getDerivedStateFromProps<T>(props: DropdownProps<T>, state: DropdownState<T>) {
    return { ...state, selectedItem: props.selectedItem, items: props.items }
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

  handleClick = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))

  handleSelect = (item: T) => {
    this.props.onSelect?.(item)

    this.setState({
      isOpen: false,
      selectedItem: item,
    })
  }

  render() {
    const { isOpen, items, selectedItem } = this.state

    const { formatItemLabel, formatSelectedLabel } = this.props

    const selectedLabel = selectedItem
      ? formatSelectedLabel
        ? formatSelectedLabel(selectedItem)
        : selectedItem.label
      : ''

    return (
      <div ref={this.overlay}>
        <StyledDropdown>
          <StyledDropdownButton onClick={this.handleClick}>
            {selectedLabel}
            <StyledDropdownIcon isOpen={isOpen}>
              <ArrowDownIcon />
            </StyledDropdownIcon>
          </StyledDropdownButton>
          {isOpen && (
            <StyledDropdownContent>
              {items.map(item => (
                <StyledDropdownItem
                  key={item.label}
                  isSelected={item.label === selectedItem.label}
                  onClick={() => this.handleSelect(item)}
                >
                  {formatItemLabel ? formatItemLabel(item) : item.label}
                </StyledDropdownItem>
              ))}
            </StyledDropdownContent>
          )}
        </StyledDropdown>
      </div>
    )
  }
}

export default Dropdown
