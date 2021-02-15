import { createGlobalStyle } from 'styled-components'
import { resetCss } from 'styles/reset'
import { StyleConst } from 'styles/constants'

export const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body {
    font-size: ${StyleConst.FONT.BASE}px;
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "ヒラギノ角ゴシック", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    background: #F0F0F0;

    .mincho {
      font-family: YuMincho, "Yu Mincho", serif;
    }
  }

  input,
  textarea {
    padding: 0;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    resize: none;

    &::placeholder {
      color: ${StyleConst.TEXT_COLOR.PLACEHOLDER};
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    position: relative;

    &:disabled {
      cursor: default;
      pointer-events: none;
    }
  }

  a,
  a:focus,
  a:visited {
    color: inherit;
    text-decoration: none;
    border: none;
    outline: none;
  }
`
