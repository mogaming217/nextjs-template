const APP_ENV = process.env.APP_ENV || 'local'
console.log("launch on", `node: ${process.env.NODE_ENV}`, `app_env: ${APP_ENV}`, `project: ${process.env.GCLOUD_PROJECT}`)

// 環境変数
// TODO: Server側のCredentialを埋める方法は何がいいんだろう
// const serverEnvVars = require(`./env/server/${APP_ENV}`).default
const publicEnvVars = require(`./env/public/${APP_ENV}`)

const nextConfig = {
  webpack: config => {
    // module alias
    config.resolve.alias['@'] = __dirname
    return config
  },
  env: {
    ...publicEnvVars
  },
}

module.exports = nextConfig
