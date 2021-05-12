import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'

type Props = {
  currentTime: string
}

const Page: NextPage<Props> = (props: Props) => {
  return <p>{props.currentTime}</p>
}

export const getServerSideProps: GetServerSideProps = ({ res }): Promise<GetServerSidePropsResult<Props>> => {
  const date = new Date()
  const currentTime = date.toLocaleString()

  // 👇 ここがポイント
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=86400')

  return Promise.resolve({
    props: {
      currentTime,
    },
  })
}

export default Page
