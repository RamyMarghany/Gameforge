import React from 'react';
import{CardContainer, Info, MainInfo} from './style.css'

const Card = props =>{
    return(
        <CardContainer>
            <Info><MainInfo>name: </MainInfo>{props.name}</Info>
            <Info><MainInfo>email: </MainInfo>{props.email}</Info>
        </CardContainer>        
    )
}

export default Card;