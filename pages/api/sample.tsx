import { NextApiResponse, NextApiRequest } from 'next'
import { serverEnv } from 'env'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ ...serverEnv, appEnv: process.env.APP_ENV })
}
