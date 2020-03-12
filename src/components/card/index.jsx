import React from 'react';
import{CardContainer, Info, MainInfo} from './style.css'

const Card = props =>{
    return(
        <CardContainer>
            <Info><MainInfo>{props.firstLabel} </MainInfo>{props.mainInfo}</Info>
            <Info><MainInfo>{props.secondLabel}</MainInfo>{props.secondaryInfo}</Info>
        </CardContainer>        
    )
}

export default Card;