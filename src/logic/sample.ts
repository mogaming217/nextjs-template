import { firestore } from 'lib/firebase/client'

export const getUser = async (userID: string) => {
  const snap = await firestore.collection('users').doc(userID).get()
  return snap.data()
}
