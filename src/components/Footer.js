import React from 'react'
import styled from "styled-components"
import { Button } from './Button'



const Section = styled.div`
width:100%;
padding:4rem 0rem;


`
const Container = styled.div`
padding:3rem calc((100vw - 1300px) /2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:200px;
background:#00324e;

@media  screen and (max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:200px;
}


`
const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
order:1;

h1{

    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

@media  screen and (max-width:768px){
 order:2;
}







`
const ColumnRight = styled.div`

order:2;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

p{
    padding:1rem;
    cursor:pointer;

    transition: 0.2s ease-in-out;

&:hover{
    color:white;
}
}
@media  screen and (max-width:768px){
 order:1;
}

`




const Footer = ({heading,airbnbIcon,fbIcon,youtubeIcon,infoOne,infoTwo,infoThree}) => {
    return (
     <Section>
     <Container>
     <ColumnLeft>
        <h1>{heading}</h1>
        <Button to="/home" primary="true"> 
      Contact Us
      </Button>
     
     </ColumnLeft>
  
     <ColumnRight>
        <p>{infoOne}</p>
      <p>{infoTwo}</p>
      <p>{infoThree}</p>
     
    </ColumnRight>
    

     </Container>
     </Section>
    )
}

export default Footer
