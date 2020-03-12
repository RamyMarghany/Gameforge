import styled from 'styled-components/macro'

export const AccordionTitle = styled.div`    
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    cursor:pointer;
    background: #215c75;
    color: #e0a03c;
 
    &:hover, &.expanded{
        color: #da5d31;
        background: #33222e;
    }
`
export const AccordionBody = styled.div`
    height: 0;
    overflow: hidden;
    background: #fff;
    text-align: left;
    
    &.active{
        border: 1px solid #ccc;
        padding: 20px;
        height:auto;
    }

`