// Please remove this file

import React from 'react'
import styled from 'styled-components'
import { StyleConst } from 'styles/constants'

const Container = styled.div`
  padding: 32px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: ${StyleConst.FONT.XLARGE}px;
  font-weight: ${StyleConst.FONT_WEIGHT.BOLD};
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

      <p style={{ marginTop: 16 }}>Hey! This is Firebase Hosting x CloudRun x TypeScript x styled-components samples</p>

      <VerticalCenter style={{ marginTop: 16 }}>
        built by
        <Icon src="/icon.png" alt="アイコン" style={{ marginLeft: 4 }} />
      </VerticalCenter>
    </Container>
  )
}
