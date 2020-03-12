import styled from 'styled-components/macro'

export const DropdownContainer = styled.div`
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    position:relative;
    cursor:pointer;
    background:#edecf1;
    width:6em;
    transition: 0.2s all ease-in-out;

    &:hover{
        background: #33222e;
        color: #da5d31;
    }

    //for tablets and desktops
    @media(min-width:576px){
        justify-self: end;
        margin-right: 2.5em;
    }

    //for mobile
    @media(max-width:576px){
        justify-self: center;
        margin-top:1em;
    }
`

export const DropdownButton = styled.button`
    background:transparent;
    border: none;
    color: #F0A453;
    font-size: 0.8em;
    cursor: pointer;
    &:focus, &:hover{
        outline:none;
        color:#DA5D2A;
    }
`

export const DropdownList = styled.div`
    position: absolute;
    background: #fff;
    top: 2em;
    left: 0;
    width: 100%;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow: 1px 2px 7px #7b7b7b;
    height: 0;
    height 0.15s ease-out;
    overflow: hidden;
    border: none;

    &.active{
        height:auto;
    }
`

export const DropdownItem = styled.a`
    display:block;
    text-decoration: none;
    font-size: 0.7em;
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
    margin: 0 14px;
    text-transform: capitalize;
    color: #33222E;

    &:last-of-type{
        border-bottom: none;
    }

    &:hover{
        color:#F0A453;
    }
`