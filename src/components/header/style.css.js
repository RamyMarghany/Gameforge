import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
    background:red;
    padding:20px;
    position: fixed;
    width: 100%;
`

export const HeaderWrapper = styled.div`
    margin:auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width:576px){
        grid-template-columns: 1fr;
    }
    @media(min-width:992px){
        max-width:970px;
    }
`

export const Logo = styled.a`
   color:#fff;
   font-size:1.2em;
   text-decoration: none;
   align-self: center;
   &:hover{
        text-decoration: none;
        color:#fff;
   }
   
   //for tablet and desktop
   @media(min-width:576px){
        justify-self: start;
   }
`