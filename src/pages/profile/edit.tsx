import { useAuthState } from 'hooks/auth'
import { firestore, storage } from 'lib/firebase/client'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

type FormInput = {
  icon: FileList
  name: string
}

const Page: NextPage = () => {
  const router = useRouter()
  const authState = useAuthState()
  const { handleSubmit, register } = useForm<FormInput>()

  const onSubmit = useCallback(
    async (input: FormInput) => {
      console.log(input)
      const userID = authState.user?.id
      if (!userID) return

      try {
        const icon = input.icon.item(0)!
        const ext = icon.name.split('.').pop()
        const storageRef = storage.ref(`users/${userID}/icon.${ext}`)
        await storageRef.put(icon)
        const url = await storageRef.getDownloadURL()

        await firestore.collection('users').doc(userID).set(
          {
            name: input.name,
            iconURL: url,
          },
          { merge: true }
        )

        router.push('/profile')
      } catch (e) {
        console.error(e)
      }
    },
    [authState.user?.id]
  )

  return (
    <div>
      <h2>プロフィール登録</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('icon')} type="file" accept="image/*" />
        <input {...register('name')} type="text" />
        <button type="submit">保存</button>
      </form>
    </div>
  )
}

export default Page
