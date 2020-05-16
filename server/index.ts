import next from 'next'
import express, { Request, Response } from 'express'
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// 環境変数の読み込み
import dotenv from 'dotenv'
dotenv.config({ path: `${process.cwd()}/env/.env.${process.env.APP_ENV}` })

// middleware
import basicAuth from '../server-middleware/basicAuth'

// api
import expressApi from './custom'

nextApp.prepare().then(() => {
  const server = express()

  // basic認証
  console.log('use basic auth:', process.env.USE_BASIC_AUTH)
  server.use(basicAuth)

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
