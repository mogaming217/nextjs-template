console.log('launch on', `node: ${process.env.NODE_ENV}`, `app_env: ${process.env.NEXT_PUBLIC_APP_ENV}`)

const nextConfig = {
  webpack: config => {
    // module alias
    config.resolve.alias['@'] = __dirname

    return config
  },
  excludeFile: str => /\*.{spec,test}.ts/.test(str),
}

module.exports = nextConfig
