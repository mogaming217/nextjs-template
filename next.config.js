const path = require('path')

const APP_ENV = process.env.APP_ENV || 'local'
console.log("launch on", `node: ${process.env.NODE_ENV}`, `app_env: ${APP_ENV}`, `project: ${process.env.GCLOUD_PROJECT}`)

const nextConfig = {
  webpack: config => {
    // module alias
    config.resolve.alias['@'] = path.join(__dirname, '.')
    return config
  },
}

module.exports = nextConfig
