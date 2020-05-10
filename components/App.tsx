import { FC } from 'react'
import { GlobalStyle } from '@/styles/Global'

export const App: FC = ({ children }) => {
  return (
    <div className='appRootSample'>
      <GlobalStyle />
      { children }
    </div>
  )
}
