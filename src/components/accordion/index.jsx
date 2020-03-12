import React, { useState } from 'react'
import { AccordionWrapper, AccordionTitle, AccordionBody } from './style.css'

const CustomAccordion = props => {
  const [showBody, setShowBody] = useState(false)

  return (
    <AccordionWrapper>
      <AccordionTitle
        isOpened={showBody}
        onClick={() => setShowBody(!showBody)}
        className={showBody && 'isOpen'}
      >
        <span>{props.accordionTitle}</span>
        {!showBody ? '+' : '-'}
      </AccordionTitle>
      {showBody && (
        <AccordionBody
          dangerouslySetInnerHTML={{
            __html: props.accordionBody
          }}
          visible={showBody}
        ></AccordionBody>
      )}
    </AccordionWrapper>
  )
}

export default CustomAccordion
