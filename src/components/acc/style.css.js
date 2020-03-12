import styled from 'styled-components/macro'

export const AccordionTitle = styled.div`    
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    cursor:pointer;
`
export const AccordionBody = styled.div`
    height: 0;
    overflow: hidden;
    background: #eaeaea;

    &.active{
        border: 1px solid #ccc;
        padding: 20px;
        height:auto;
    }

`