// Please remove this file

import React from 'react'
import styled from 'styled-components'
import Constants from 'styles/Constants'

const Container = styled.div`
  padding: 32px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: ${Constants.FONT.XLARGE}px;
  font-weight: ${Constants.FONT_WEIGHT.BOLD};
`

const Icon = styled.img`
  height: 28px;
  width: auto;
  display: inline-block;
`

const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`

export const Sample: React.FC = () => {
  return (
    <Container>
      <Title>Hello Next.js!</Title>

      <p style={{ marginTop: 16 }}>
        Firebase Hosting x CloudRun x TypeScript x Express x styled-components
      </p>

      <VerticalCenter style={{ marginTop: 16 }}>
        built by
        <Icon src="/icon.png" alt="アイコン" style={{ marginLeft: 4 }} />
      </VerticalCenter>
    </Container>
  )
}
