import 'styled-components'
import { Breakpoints } from 'types/breakpoints.types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      disabled: string
      gray: string

      primaryFont: string

      white: string
    }
    shadow: {
      medium: string
    }
    breakpoints: Breakpoints
  }
}
