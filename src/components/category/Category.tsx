import { Component } from 'react'
import { StyledCategory } from './Category.style'

interface CategoryProps {
  category: string
}

class Category extends Component<CategoryProps> {
  render() {
    return <StyledCategory>Category: {this.props.category}</StyledCategory>
  }
}

export default Category
