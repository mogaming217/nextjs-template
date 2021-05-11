/* eslint-disable @typescript-eslint/no-non-null-assertion */
interface PublicEnv {
  env: 'dev' | 'prod'
  host: string
}

export const publicEnv: PublicEnv = {
  env: process.env.NEXT_PUBLIC_APP_ENV! as any,
  host: process.env.NEXT_PUBLIC_HOST!,
}
