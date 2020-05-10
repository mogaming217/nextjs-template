import React from 'react'
import { NextPage, NextPageContext } from 'next'

type Props = {
  statusCode: number
  message?: string
}

const ErrorPage: NextPage<Props> = (props: Props) => {
  return (
    <div>
      <div>{props.statusCode}</div>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): Props => {
  const statusCode: number = res?.statusCode || err?.statusCode || 404
  const message = err?.message
  return { statusCode, message }
}

export default ErrorPage
