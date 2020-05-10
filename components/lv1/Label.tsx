import { FC } from 'react'

type Props = {
  text: string
}

const label: FC<Props> = (props: Props) => {
  return (
  <div>{ props.text }</div>
  )
}

export const Label = label
