import styled from 'styled-components/macro'

export const AccordionWrapper = styled.div`
  border: 1px solid #cecece;
  position: relative;
`
export const AccordionTitle = styled.div`
      
      position: relative;
      cursor: pointer;
      transition: all 0.05s ease-in-out;

      span {
        cursor: pointer;
      }

      svg {
        float: right;
      }

    
    `


export const AccordionBody = styled.div`
    
      transition: all 0.05s ease-in-out;

      & > a {
        text-decoration: none;
      }
    `
