import styled from 'styled-components/macro'

export const TabContainer = styled.section`
    width:100%;
    display: block;
    margin: 0 0 3em;
    border-radius: 5px;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 13px -1px rgba(0, 0, 0, 0.75);
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
    background: #efefef;
    border-right: 1px solid #a0a0a0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px #ccc solid;

    &.btnActive{
        background: #fff;
        color:red;
        border-bottom: 2px solid red;
    }

    &:hover{
        color:red;
        background: #fff;
        cursor: pointer;
        border-bottom: 2px solid red;
    }

    &:focus{
        outline:none;
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
    }
`


