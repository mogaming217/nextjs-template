// can import by server side

import * as admin from 'firebase-admin'
import { serverEnv } from 'env'

if (admin.apps.length === 0) {
  const config: any = {
    type: 'service_account',
    ...serverEnv.firebase,
  }

  admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: process.env.PUBLIC_DATABASE_URL,
  })
}

export default admin
