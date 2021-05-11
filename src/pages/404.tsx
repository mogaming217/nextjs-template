import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <p className="message">ページが見つかりませんでした</p>
      <Link href="/">トップページへ</Link>
    </div>
  )
}

export default NotFoundPage
