import { NextApiResponse } from 'next'
import { serverEnv } from '@/env'

export default async (res: NextApiResponse) => {
  return res.status(200).json({ ...serverEnv })
}
