import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { StyleConst } from 'styles/constants'

const _NotFoundPage = styled.div`
  .message {
    font-size: ${StyleConst.FONT.XLARGE}px;
    font-weight: ${StyleConst.FONT_WEIGHT.BOLD};
    text-align: center;
    margin-bottom: 24px;
  }
`

const NotFoundPage: NextPage = () => {
  return (
    <_NotFoundPage>
      <p className="message">ページが見つかりませんでした</p>
      <Link href="/">トップページへ</Link>
    </_NotFoundPage>
  )
}

export default NotFoundPage
