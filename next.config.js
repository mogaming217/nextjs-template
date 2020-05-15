const APP_ENV = process.env.APP_ENV || 'local'
console.log("launch on", `node: ${process.env.NODE_ENV}`, `app_env: ${APP_ENV}`, `project: ${process.env.GCLOUD_PROJECT}`)

// 環境変数
const envPath = `env/.env.${APP_ENV}`
const fs = require('fs')
fs.statSync(envPath) // envファイルの存在確認
const DotEnv = require('dotenv-webpack')
const envFile = new DotEnv({ path: envPath, systemvars: true })

const nextConfig = {
  webpack: config => {
    // module alias
    config.resolve.alias['@'] = __dirname

    // env
    config.plugins = config.plugins || []
    config.plugins.push(envFile)

    return config
  },
}

module.exports = nextConfig
