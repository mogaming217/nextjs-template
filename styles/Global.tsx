import { createGlobalStyle } from 'styled-components'
import { resetCss } from '@/styles/Reset'

export const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body {
    font-size: 12px;
    color: gray;
  }
`
