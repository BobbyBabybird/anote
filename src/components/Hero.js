import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './Wrapper'
import { Button } from './Button'
import bg from '../../static/img/jumbotron.jpg'
import { Heading1, Text } from './Typo'

const Background = styled.div`
  background-color: khaki;
  background-image: url(${bg});
  display: flex;
  height: 400px;
  align-items: center;
`

const Inner = styled.div`
  width: 50%;
  padding: 2rem;
  --heading-color: #fff;
  --text-color: #fff;
  --margin-bottom: 20px;
`

const Hero = () => (
  <Background>
    <Wrapper>
      <Inner>
        <Heading1>User our product</Heading1>
        <Text>Icing ice cream bear claw brownie sweet. Gingerbread carrot cake sweet. Liquorice candy brownie tart gummi bears wafer cupcake.</Text>
        <Button>Klicka mig</Button>
      </Inner>
    </Wrapper>
  </Background>
)

export default Hero
