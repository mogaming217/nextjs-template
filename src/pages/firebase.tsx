import { firestore } from 'lib/firebase/client'
import { NextPage } from 'next'
import React from 'react'

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
