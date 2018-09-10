import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './Wrapper'
import { Button } from './Button'

const Inner = styled.div`
  height: 400px;
  width: 50%;
  padding: 2rem;
`

const Background = styled.div`
  background-color: khaki;
`

const Hero = () => (
  <Background>
    <Wrapper>
      <Inner>
        <h1>User our product</h1>
        <p>Icing ice cream bear claw brownie sweet. Gingerbread carrot cake sweet. Liquorice candy brownie tart gummi bears wafer cupcake.</p>
        <Button>Klicka mig</Button>
      </Inner>
    </Wrapper>
  </Background>
)

export default Hero
