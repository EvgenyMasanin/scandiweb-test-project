import { GlobalStyles, theme } from 'global.styles'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './components/app/App'

import { ApolloProvider } from '@apollo/client'
import { client } from 'graphql-api/client'

import { Provider } from 'react-redux'
import { store } from 'redux-store'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
)
