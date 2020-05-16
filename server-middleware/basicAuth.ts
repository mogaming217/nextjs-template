import auth from 'basic-auth'
import { Request, Response, NextFunction } from 'express'

// username: password
const credentials: { [key: string]: string } = {
  'sample_user': 'sample_password'
}

export default function (req: Request, res: Response, next: NextFunction) {
  if (process.env.USE_BASIC_AUTH !== 'true') return next()

  const user = auth(req)
  if (!(user && credentials[user.name] && credentials[user.name] === user.pass)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    return res.status(401).send()
  }

  return next()
}
