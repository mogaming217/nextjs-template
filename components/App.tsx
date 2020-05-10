import { FC } from 'react'
import { GlobalStyle } from '@/styles/Global'

export const App: FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      { children }
    </div>
  )
}
