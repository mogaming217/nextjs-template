import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { App } from '@/components/App'
import { Sample } from '@/components/Sample'
import { publicEnv, serverEnv } from '@/env'

type Props = {
  sampleValue?: string,
  host: string
}

const RootPage: NextPage<Props> = (props: Props) => (
  <App>
    <Sample />
    <div>{ props.sampleValue }{ props.host }</div>
  </App>
)

RootPage.getInitialProps = ({}: NextPageContext): Props => {
  return {
    sampleValue: serverEnv.sampleValue,
    host: publicEnv.host
  }
}

export default RootPage
