import { Component, ComponentType, memo, ReactNode } from 'react'
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
    path: `${Paths.ProductListPage}/:category`,
    component: ProductListPage,
  },
  { path: `${Paths.ProductDescriptionPage}/:id`, component: ProductDescriptionPage },
  { path: Paths.CartPage, component: CartPage },
]

interface RouterProps {
  defaultCategory: string
}

class Router extends Component<RouterProps> {
  render() {
    const defaultPath = `${Paths.ProductListPage}/${this.props.defaultCategory}`

    return (
      <Switch>
        {routes.map(({ path, exact, component, children }) => {
          if (path === Paths.Root) {
            return (
              <Route key={path} exact={exact} path={path}>
                <Redirect to={defaultPath} />
              </Route>
            )
          }

          return (
            <Route key={path} exact={exact} path={path} component={component}>
              {children}
            </Route>
          )
        })}
        <Redirect to={defaultPath} />
      </Switch>
    )
  }
}

export default memo(Router)
