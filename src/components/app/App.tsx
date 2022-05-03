import { Component, ComponentClass } from 'react'
import { compose } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

import Header from 'components/header/Header'

import { RootState } from 'redux-store'
import {
  selectCategoryNames,
  setCategoryNames,
  setCategory,
  selectCategory,
} from 'redux-store/reducers/categories.slice'
import { selectCurrencies, setCurrencies } from 'redux-store/reducers/currency.slice'

import { withCategoryNames, WithCategoryNamesData } from 'graphql-api/hocs'
import Box from 'components/ui/box'
import ProductListPage from 'pages/product-list-page/ProductListPage'
import { withCurrencies, WithCurrenciesData } from 'graphql-api/hocs/withCurrency'
import { Currency } from 'types'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Paths } from 'routes'
import ProductDescriptionPage from 'pages/product-description-page/ProductDescriptionPage'
import CartPage from 'pages/cart-page/CartPage'

interface AppProps extends WithCategoryNamesData, WithCurrenciesData {
  categoryNames: string[]
  category: string
  currencies: Currency[]

  setCategoryNames: (categoryNames: string[]) => void
  setCategory: (categoryName: string) => void
  setCurrencies: (currencies: Currency[]) => void
}

class App extends Component<AppProps> {
  componentDidUpdate(): void {
    const {
      categoryNamesData: {
        loading: categoryNamesDataLoading,
        categories,
        error: categoryNamesDataError,
      },
      currenciesData: {
        loading: currenciesDataLoading,
        currencies: currenciesData,
        error: currenciesDataError,
      },
      categoryNames,
      currencies,
      setCategory,
      setCategoryNames,
      setCurrencies,
    } = this.props

    if (!categoryNamesDataLoading && (categoryNamesDataError || currenciesDataError)) return

    if (!categoryNamesDataLoading && categoryNames.length === 0) {
      const newCategoryNames = categories.map(category => category.name)
      setCategoryNames(newCategoryNames)
      setCategory(newCategoryNames[0])
    }

    if (!currenciesDataLoading && currencies.length === 0 && currenciesData) {
      setCurrencies(currenciesData)
    }
  }

  render() {
    const {
      categoryNamesData: { loading, error },
    } = this.props

    if (loading) return <div>Loading...</div>

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return (
      <>
        <Box maxWidth={1240} margin="0 auto" position="relative" padding="0 20px">
          <Header />
        </Box>
        <Box height="calc(100% - 76px)" overflow="auto" padding="0 20px">
          <Box maxWidth={1240} margin="0 auto" height="100%" padding="80px 0 0">
            <Switch>
              <Route exact path="/">
                <Redirect to={Paths.ProductListPage} />
              </Route>
              <Route path={Paths.ProductListPage} component={ProductListPage} />
              <Route
                path={`${Paths.ProductDescriptionPage}/:id`}
                component={ProductDescriptionPage}
              />
              <Route path={Paths.CartPage} component={CartPage} />
            </Switch>
          </Box>
        </Box>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  categoryNames: selectCategoryNames(state),
  category: selectCategory(state),
  currencies: selectCurrencies(state),
})

const mapDispatchToProps = {
  setCategoryNames,
  setCategory,
  setCurrencies,
}

export default compose<ComponentClass>(
  withCurrencies,
  withCategoryNames,
  connect(mapStateToProps, mapDispatchToProps)
)(App)
