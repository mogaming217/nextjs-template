import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Sample } from 'components/Sample'
import { serverEnv, publicEnv } from 'env'

type Props = {
  sampleValue?: string
  host: string
}

const RootPage: NextPage<Props> = (props: Props) => (
  <>
    <Sample />
    <Link href="/firebase">
      <a>Firestoreからデータ取得</a>
    </Link>
    <div>
      {props.sampleValue}
      {props.host}
    </div>
  </>
)

RootPage.getInitialProps = (): Props => {
  // 404へいって、その後TOPへ返ってくるとちゃんとエラーになるので、サーバー側でしか読み取れない
  const value = serverEnv.firebase.project_id
  return {
    sampleValue: value,
    host: publicEnv.host,
  }
}

export default RootPage
