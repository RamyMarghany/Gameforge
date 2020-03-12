import React, {useState} from 'react';
import{AccordionBody, AccordionTitle} from './style.css'

const Accordion = (props) =>{
    const [open, setOpen] = useState(false);
    
    return(
        <div className="accordion-container">
            <AccordionTitle className={open ? "accordion-title expanded" : "accordion-title"} onClick={e=>setOpen(!open)}>{props.title}</AccordionTitle>
            <AccordionBody className={open ? "accordion-body active" : "accordion-body"}>{props.body}</AccordionBody>
        </div>
    )
}

export default Accordion
