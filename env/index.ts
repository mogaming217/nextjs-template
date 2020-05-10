interface ServerEnv {
  sampleValue: string
}

// TODO: まだちゃんと埋められてない
export const serverEnv: ServerEnv = {
  sampleValue: process.env.sampleValue!
}

interface PublicEnv {
  host: string
}

export const publicEnv: PublicEnv = {
  host: process.env.host!
}
