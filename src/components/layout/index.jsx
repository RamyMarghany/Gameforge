import React from 'react';
import {BodyWrapper} from './style.css'
import TabController from '../tab'
import CustomAccordion from '../accordion'

const Wrapper = () => {
    return(
        <BodyWrapper>
            <TabController/>
            <CustomAccordion
                accordionTitle='accordion title'
                accordionBody='accordion body'
            />
        </BodyWrapper>
    )
}

export default Wrapper
