import React from 'react'
import Dropdown from '../dropdown'
import{ HeaderContainer, HeaderWrapper, Logo } from './style.css'

const Header = () => {
  return (
    <HeaderContainer data-testid='header'>
      <HeaderWrapper>
          <Logo>Gameforge</Logo>
          <Dropdown />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
