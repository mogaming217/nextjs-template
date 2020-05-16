import next from 'next'
import express, { Request, Response } from 'express'
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

import expressApi from './custom'
import basicAuth from '../server-middleware/basicAuth'

app.prepare().then(() => {
  const server = express()

  // basic認証
  if (process.env.USE_BASIC_AUTH === 'true') {
    server.use(basicAuth)
  }

  // Express側の処理を設定できる
  server.use('/custom', expressApi)

  // Next側の処理
  server.get('*', (req: Request, res: Response) => {
    return handle(req, res)
  })

  server.listen(port, (err: any) => {
    if (err) throw err
    console.log(
      `> Ready on ${process.env.CLIENT_URL || `http://localhost:${port}`}`
    )
  })
})
