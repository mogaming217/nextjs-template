// Express側ではビルド環境が違うので process.browserがエラーになってしまう
// import { serverEnv } from '../../env'

import express from 'express'
const router = express.Router()

router.get('/', async (_req, res) => {
  res.status(200).json({
    appEnv: process.env.APP_ENV || 'undefined',
    useBasicAuth: process.env.USE_BASIC_AUTH || 'undefined',
    HOST: process.env.PUBLIC_HOST || 'undefined'
  })
})

export default router
