import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { App } from 'components/App'
import { firestore } from 'lib/firebase/client'

type Props = {
  user: object
}

const Page: NextPage<Props> = (props: Props) => {
  return (
    <App>
      <div>{ JSON.stringify(props.user) }</div>
    </App>
  )
}

Page.getInitialProps = async ({}: NextPageContext): Promise<Props> => {
  const result = await firestore.collection('users').doc('moga').get()
  return {
    user: result.data()!
  }
}

export default Page
