// Express側ではビルド環境が違うので process.browserがエラーになってしまう
// import { serverEnv } from '../../env'

import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  res.status(200).json({ server: req.query, })
})

export default router
