import { NextApiResponse, NextApiRequest } from 'next'
import { serverEnv } from 'env'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ ...serverEnv })
}
