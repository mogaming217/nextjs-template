import { Sample } from 'components/Sample'
import { publicEnv } from 'env'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

type Props = {
  appEnv: string
  host: string
}

const RootPage: NextPage<Props> = (props: Props) => (
  <>
    <Sample />
    <Link href="/firebase">
      <a>Firestoreからデータ取得</a>
    </Link>
    <div>
      {props.host}
      <br />
      {props.appEnv}
    </div>
  </>
)

RootPage.getInitialProps = (): Props => {
  return {
    appEnv: publicEnv.env,
    host: publicEnv.host,
  }
}

export default RootPage
