import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
;(() => {
  if (firebase.apps.length !== 0) {
    return firebase.app()
  }

  return firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  })
})()

const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' || process.env.NODE_ENV === 'test') {
  console.log('setup to connect local firebase emulator suite')
  try {
    const config = require('../../../firebase.json')
    firestore.useEmulator('localhost', config.emulators.firestore.port)
    auth.useEmulator(`http://localhost:${config.emulators.auth.port}`)
    storage.useEmulator('localhost', config.emulators.storage.port)
  } catch {
    // do nothing
  }
}

export { firestore, auth, storage }
