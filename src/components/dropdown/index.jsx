import React, {useState} from 'react'
import { DropdownContainer, DropdownButton, DropdownList, DropdownItem } from './style.css'

const Dropdown = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <DropdownContainer className="Dropdown" data-testid='dropdown'>
            <DropdownButton
                onClick={toggleOpen}
            >
                Settings
            </DropdownButton>
            <DropdownList className={isOpen ? "dropdown-group active" : "dropdown-group"}>
                <DropdownItem >Profile</DropdownItem>
                <DropdownItem >settings</DropdownItem>
                <DropdownItem >Log out</DropdownItem>
            </DropdownList>
      </DropdownContainer>
    )
}

export default Dropdown