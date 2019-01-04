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

const Li = styled.li`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: var(--default-text-color);
  font-size: 1.0rem;
  margin-bottom: var(--margin-bottom, 10px);
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
          <Li>Alviksvägen 11</Li>
          <Li>111 22 Bromma</Li>
          <Li>info@a-note.se</Li>
          <Li>+46(0)70-111 22 33</Li>
        </ul>
      </Row>
      <Row>
        <Heading4>Social Medier</Heading4>
        <ul>
          <Li>Facebook</Li>
          <Li>Instagram</Li>
        </ul>
      </Row>
    </FooterWrapper>
  </Background>
)

export default Footer
