import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
    background:red;
    width:100%;
    padding:20px;
`

export const HeaderWrapper = styled.div`
    //for only desktop
    @media(min-width:768px){
        max-width:1240px;
        margin:auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const Logo = styled.a`
   color:#fff;
   font-size:1.2em;
   text-decoration: none;
   
   &:hover{
        text-decoration: none;
        color:#fff;
   }
   
   //for tablet and desktop
   @media(min-width:576px){
        justify-self: start;
   }
`