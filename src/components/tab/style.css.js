import styled from 'styled-components/macro'

export const TabContainer = styled.section`
    width:100%;
    display: block;
    margin: 0 0 3em;
    border-radius: 5px;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 13px -1px rgba(0, 0, 0, 0.75);

    @media(max-width:567px){
        box-shadow:none;
    }
`

export const TabsButtonsWrapper = styled.div`
    text-align: initial;
`

export const TabsButton = styled.button`
    border: none;
    font-size: 0.8em;
    margin: 10px 0 0;
    padding: 10px 26px;
    -webkit-transition: 0.3s all ease-in;
    transition: 0.3s all ease-in;
    background: #215c75;
    border-right: 1px solid #a0a0a0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px #ccc solid;
    color: #E1A020;

    &.btnActive{
        background: #33222e;
        color: #da5d2a;
        border-bottom: 3px solid #da5d2a;
    }

    &:hover{
        color:#da5d2a;
        background: #33222e;
        cursor: pointer;
        border-bottom: 3px solid #da5d2a;
    }

    &:focus{
        outline:none;
    }

    //for small mobile
    @media(max-width:576px){
        display: block;
        width: 100%;
        margin-bottom: 0;
        margin: 0;
        padding: 15px;
    }
`

export const TabsContent = styled.div`
    clear:both;
`

export const TabLayout = styled.div`
    @media(min-width:720px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 20px;
        column-gap: 10px;
        row-gap: 10px;
        background:#fff;
    }
`

export const Loading = styled.p`
    grid-column: 1/4;
    color:#da5d31;
`


