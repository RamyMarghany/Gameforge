import styled from 'styled-components/macro'

export const BodyWrapper = styled.section`
    margin: auto;
    width: auto;
    padding:6em 2em 3em;

    @media(max-width:576px){
       padding-top:10em;
    }

    @media(min-width:992px){
        max-width:970px;
    }
`
