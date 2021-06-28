// organize-imports-ignore
import firebase from 'firebase/app'
firebase.initializeApp({
  apiKey: 'sample',
  projectId: 'fake-project-id',
})

import { getUser } from 'logic/sample'

describe('firestore', () => {
  it('sample', async () => {
    const result = await getUser('sample')
    expect(result).toBeFalsy()
  })
})
