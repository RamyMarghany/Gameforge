import styled from 'styled-components/macro'

export const CardContainer = styled.div`
    border: 1px solid #ccc;
    box-shadow: 1px 2px 3px -1px rgba(0,0,0,0.75);
    text-align: left;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover{
        box-shadow:3px 4px 4px -1px rgb(216,16,16);
    }
`

export const Info = styled.p`
    font-weight: bold;  
    font-size:0.9em;
    word-break: break-word;
`

export const MainInfo = styled.span`
    text-transform: capitalize;
    font-weight: lighter;
    color:red;
    
`

