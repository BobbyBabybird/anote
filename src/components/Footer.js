import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './Wrapper'
import  { Heading2, Heading4, Text } from './Typo'

const Background = styled.div`
  background-color: #A1A1A1;
  padding: 40px 0;
`;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  width: ${props => props.large ? '50%' : '20%'};
`;

const Footer = () => (
  <Background>
    <FooterWrapper>
      <Row large>
        <Heading2>Logo</Heading2>
        <Text>
          <Text>Toffee macaroon gummies candy canes. Pie donut gingerbread sweet roll cake carrot cake dragée. Lollipop oat cake tiramisu marshmallow candy cupcake croissant jelly-o marshmallow. Apple pie carrot cake carrot cake macaroon macaroon cotton candy fruitcake.</Text>
        </Text>
      </Row>
      <Row>
        <Heading4>Kontakt</Heading4>
        <ul>
          <li>Alviksvägen 11</li>
          <li>111 22 Bromma</li>
          <li>info@a-note.se</li>
          <li>+46(0)70-111 22 33</li>
        </ul>
      </Row>
      <Row>
        <Heading4>Social Medier</Heading4>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </Row>
    </FooterWrapper>
  </Background>
)

export default Footer
