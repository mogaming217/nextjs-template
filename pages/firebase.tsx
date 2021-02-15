import React from 'react'
import { NextPage } from 'next'
import { firestore } from 'lib/firebase/client'

type Props = {
  user: any
}

const Page: NextPage<Props> = (props: Props) => {
  return (
    <>
      <div>{JSON.stringify(props.user)}</div>
    </>
  )
}

Page.getInitialProps = async (): Promise<Props> => {
  const result = await firestore.collection('users').doc('moga').get()
  return {
    user: result.data()!,
  }
}

export default Page
