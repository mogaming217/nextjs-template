interface ServerEnv {
  sampleValue: string
}

// ブラウザから触ると落ちるようにしている
export const serverEnv: ServerEnv = (() => {
  if (process.browser) return undefined as any
  return {
    sampleValue: process.env.SAMPLE_VALUE!
  } as ServerEnv
})()

interface ClientEnv {
  host: string
}

export const clientEnv: ClientEnv = {
  host: process.env.PUBLIC_HOST!
}
