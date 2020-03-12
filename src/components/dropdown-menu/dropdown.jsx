import React, {useState} from 'react'
import {DropdownContainer, DropdownButton, DropdownList, DropdownItem} from './style.css'

const Dropdown = props =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <DropdownContainer className="Dropdown">
            <DropdownButton
                onClick={e => {
                    setIsOpen(!isOpen);
                }}
            >
                settings
            </DropdownButton>
            <DropdownList className={isOpen ? "dropdown-group active" : "dropdown-group"}>
                <DropdownItem href='#'>Profile</DropdownItem>
                <DropdownItem href='#'>settings</DropdownItem>
                <DropdownItem href='#'>Log out</DropdownItem>
            </DropdownList>
      </DropdownContainer>
    )
}

export default Dropdown