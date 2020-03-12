import styled from 'styled-components/macro'

export const CardContainer = styled.div`
    border: 1px solid #ccc;
    box-shadow: 1px 2px 3px -1px rgba(0,0,0,0.75);
    text-align: left;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    background: #edecf1;

    &:hover{
        box-shadow:3px 4px 4px -1px rgb(33, 92, 117);
        background: #fff;
    }
`

export const Info = styled.p`
    font-weight: bold;  
    font-size:0.9em;
    word-break: break-word;
    color: #33222e;
`

export const MainInfo = styled.span`
    text-transform: capitalize;
    font-weight: lighter;
    color:#da5d2a;
    
`

