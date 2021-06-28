import { useAuthState } from 'hooks/auth'
import { firestore } from 'lib/firebase/client'
import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Page: NextPage = () => {
  const authState = useAuthState()
  const [profile, setProfile] = useState<{ [key: string]: any }>()

  useEffect(() => {
    const userID = authState.user?.id
    if (!userID) return

    const fetch = async () => {
      const snap = await firestore.collection('users').doc(userID).get()
      setProfile(snap.data() ?? undefined)
    }
    fetch()
  }, [authState.user?.id])

  return (
    <div>
      <h2>プロフィールデータ</h2>
      <div>{profile ? JSON.stringify(profile) : 'なし'}</div>
      {profile?.iconURL && <img src={profile.iconURL} height="100px" width="auto" />}
      <h2>編集</h2>
      <Link href="/profile/edit">編集画面へ</Link>
    </div>
  )
}

export default Page
