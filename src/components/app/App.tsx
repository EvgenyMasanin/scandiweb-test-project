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
import Router from 'routes'
import { withCurrencies, WithCurrenciesData } from 'graphql-api/hocs/withCurrency'
import { Currency } from 'types'

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
      currenciesData: { loading: currenciesDataLoading, error: currenciesDataError },
      categoryNames,
    } = this.props

    if (loading || currenciesDataLoading) return <div>Loading...</div>

    if (error || currenciesDataError) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return (
      <>
        <Box maxWidth={1240} margin="0 auto" position="relative" padding="0 20px">
          <Header />
        </Box>
        <Box height="calc(100% - 76px)" overflow="auto" padding="0 20px">
          <Box maxWidth={1240} margin="0 auto" height="100%" padding="80px 0 0">
            <Router defaultCategory={categoryNames[0]} />
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
