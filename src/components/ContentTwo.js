import React from 'react'
import styled from "styled-components"
import { Button } from './Button'


const Section = styled.div`
width:100%;
height:100%;
padding:4rem 0rem;
@media  screen and (max-width:768px){
  padding:0;
}


`
const Container = styled.div`

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;

@media  screen and (max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:300px;
}

`
const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;


order:${({reverse}) => (reverse ? '2' : '1')};

h1{

    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
    margin-bottom:2rem;
}
@media  screen and (max-width:768px){
    padding:0rem 4rem;
    
}





`
const ColumnRight = styled.div`
padding:1rem 2rem;
order:${({reverse}) => (reverse ? "1" : "2")};
display:flex;
align-items:center;
justify-content:center;


@media screen and (max-width:768px){
    order:${({reverse}) => (reverse ? "2" : "1")};
}

img{
    width:100%;
    height:100%;
    object-fit:cover;


    @media screen and (max-width:768px){
   width:90%;
    height:90%;
}
}

`



const ContentTwo = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
     <Section>
     <Container>
     <ColumnLeft reverse={reverse}>
        <h1>{heading}</h1>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
    
        <Button to="/homes" primary="true" >{buttonLabel}</Button>
     </ColumnLeft>
  
     <ColumnRight reverse={reverse}>
        <img src={image} alt="home" />
    </ColumnRight>

     </Container>
     </Section>
    )
}

export default ContentTwo
