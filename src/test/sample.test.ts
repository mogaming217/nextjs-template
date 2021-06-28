import { getUser } from 'logic/sample'

describe('firestore', () => {
  it('sample', async () => {
    const result = await getUser('sample')
    expect(result).toBeFalsy()
  })
})
