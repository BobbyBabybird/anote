import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { Wrapper } from './Wrapper'
import { Heading6 } from './Typo'

const ListItem = styled(Heading6)`
  padding: 1rem;
  display: inline-block;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: auto;
  --margin-bottom: 0;
`

const Nav = styled.nav`
  display: flex;
`

const Logo = styled.div`
  background-color: dodgerblue;
  align-self: center;
`
const NavbarWrapper = styled(Wrapper)`
  z-index: 100;
`;

const Navbar = () => (
  <NavbarWrapper>
    <Nav>
      <Logo>
        Logo
      </Logo>
      <List>
        <ListItem as="li">
          Kontakta oss
        </ListItem>
      </List>
    </Nav>
  </NavbarWrapper>
)

export default Navbar
