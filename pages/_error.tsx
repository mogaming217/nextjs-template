import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

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
    <div>
      <p className="message">{generateMessage()}</p>
      <Link href="/">トップページへ</Link>
    </div>
  )
}

export default ErrorPage
