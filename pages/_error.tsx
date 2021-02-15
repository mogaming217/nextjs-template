import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { StyleConst } from 'styles/constants'
import { PrimaryButton } from 'components/lv1'
import { Widget } from 'components/lv2'
import Link from 'next/link'

const _ErrorPage = styled.div`
  padding: 100px 0;

  .message {
    font-size: ${StyleConst.FONT.XLARGE}px;
    font-weight: ${StyleConst.FONT_WEIGHT.BOLD};
    text-align: center;
    margin-bottom: 24px;
  }
`

type Props = {
  statusCode: number
  message?: string
}

const ErrorPage: NextPage<Props> = (props: Props) => {
  const generateMessage = () => {
    switch (props.statusCode) {
      case 401:
        return 'アクセス権限がありません'
      case 404:
        return 'ページが見つかりませんでした'
      default:
        break
    }
  }
  return (
    <Widget isFull>
      <_ErrorPage>
        <p className="message">{generateMessage()}</p>
        <Link href="/">
          <PrimaryButton>トップページへ</PrimaryButton>
        </Link>
      </_ErrorPage>
    </Widget>
  )
}

export default ErrorPage
