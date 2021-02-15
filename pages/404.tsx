import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { PrimaryButton } from 'components/lv1'
import { Widget } from 'components/lv2'
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
    <Widget>
      <_NotFoundPage>
        <p className="message">ページが見つかりませんでした</p>
        <Link href="/">
          <PrimaryButton>トップページへ</PrimaryButton>
        </Link>
      </_NotFoundPage>
    </Widget>
  )
}

export default NotFoundPage
