import { publicEnv } from 'env'
import { DefaultSeo as DS } from 'next-seo'
import { FC } from 'react'

export const DefaultSeo: FC = () => {
  const serviceName = 'Next.js sample'
  const description = 'nextjs sample'
  return (
    <DS
      title={serviceName}
      description={description}
      openGraph={{
        site_name: serviceName,
        title: serviceName,
        description,
        url: publicEnv.host,
        images: [{ url: `${publicEnv.host}/assets/ogp/default.jpg` }],
        locale: 'ja_JP',
        type: 'website',
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
