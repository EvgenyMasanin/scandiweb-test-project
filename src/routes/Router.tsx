import { Component, ComponentType, ReactNode } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CartPage from 'pages/cart-page/CartPage'
import ProductListPage from 'pages/product-list-page/ProductListPage'
import ProductDescriptionPage from 'pages/product-description-page/ProductDescriptionPage'
import { Paths } from './paths'

interface RouteObject {
  exact?: boolean
  path: string
  component?: ComponentType<any>
  children?: ReactNode
}

const routes: RouteObject[] = [
  { exact: true, path: Paths.Root, children: <Redirect to={Paths.ProductListPage} /> },
  {
    path: Paths.ProductListPage,
    component: ProductListPage,
  },
  { path: `${Paths.ProductDescriptionPage}/:id`, component: ProductDescriptionPage },
  { path: Paths.CartPage, component: CartPage },
]

class Router extends Component {
  render() {
    return (
      <Switch>
        {routes.map(({ path, exact, component, children }) => (
          <Route key={path} exact={exact} path={path} component={component}>
            {children}
          </Route>
        ))}
        <Route path={Paths.ProductListPage} component={ProductListPage} />
      </Switch>
    )
  }
}

export default Router
