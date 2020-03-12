import React from 'react'
import Dropdown from '../dropdown-menu/dropdown'
// import DropdownItem from '../../common/dropdown-menu/dropdown-item'
import{HeaderContainer, HeaderWrapper, Logo} from './style.css'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
          <Logo href="#">Logo</Logo>
          <Dropdown/>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
