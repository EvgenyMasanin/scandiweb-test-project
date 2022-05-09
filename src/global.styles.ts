import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    color: #1D1F22;
}

html, body, #root {
    height: 100%;
}

ul {
  padding-left: 20px
}
`

export const theme: DefaultTheme = {
  colors: {
    primary: '#5ece7b',
    disabled: '#8d8f9a',
    gray: '#E5E5E5',

    primaryFont: '#1D1F22',

    white: '#fff',
  },
  shadow: {
    medium: '0px 4px 35px 0px #a8acb030',
  },
  breakpoints: {
    mobile: '(max-width: 320px)',
    tablet: '(max-width: 1250px) and (min-width: 321px)',
    desktop: '(min-width: 1250px)',
  },
}
