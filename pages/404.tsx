import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <div>Not Found</div>
      <Link href='/'>TOP</Link>
    </div>
  )
}

export default NotFoundPage
