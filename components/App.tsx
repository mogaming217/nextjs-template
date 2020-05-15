import React from 'react'
import { GlobalStyle } from 'styles/Global'

export const App: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}
