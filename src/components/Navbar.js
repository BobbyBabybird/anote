import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import styled from 'styled-components'
import { Wrapper } from './Wrapper'

const ListItem = styled.li`
  padding: 1rem;
  display: inline-block;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: auto;
`

const Nav = styled.nav`
  display: flex;
`

const Logo = styled.div`
  background-color: dodgerblue;
  align-self: center;
`

const Navbar = () => (
  <Wrapper>
    <Nav>
      <Logo>
        Logo
      </Logo>
      <List>
        <ListItem>Pris</ListItem>
        <ListItem>Om oss</ListItem>
        <ListItem>Kontakta oss</ListItem>
      </List>
    </Nav>
  </Wrapper>
)

export default Navbar
