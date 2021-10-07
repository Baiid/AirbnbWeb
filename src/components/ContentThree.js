import React from 'react'
import styled from "styled-components"
import { Button } from './Button'


const Section = styled.div`
width:100%;
height:100%;
padding:4rem 0rem;
background:lightgray;
@media  screen and (max-width:768px){
  padding:0;
}



`
const Container = styled.div`
padding:3rem calc((100vw - 1300px) /2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:250px;


@media  screen and (max-width:768px){
    
 
   margin:2rem;
   display:block;
   
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

@media screen and (max-width:768px){

    margin-bottom:1rem;
}

h1{

    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
    margin-bottom:2rem;
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
const ColumnRight = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
order:${({reverse}) => (reverse ? '2' : '1')};

@media screen and (max-width:768px){

margin-top:3rem;
}

h1{

    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
    margin-bottom:2rem;
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



const ContentTwo = ({headingOne,headingTwo, paragraphOne, buttonLabel, reverse, imageOne, imageTwo}) => {
    return (
     <Section>
     <Container>
     <ColumnLeft reverse={reverse}>
        <img src={imageOne} alt="homeOne" />
        <h1>{headingOne}</h1>
        <p>{paragraphOne}</p>
  

        <Button to="/homes" primary="true" >{buttonLabel}</Button>
     </ColumnLeft>
  
     <ColumnRight reverse={reverse}>
        <img src={imageTwo} alt="homeTwo" />
        <h1>{headingTwo}</h1>
        <p>{paragraphOne}</p>
        <Button to="/homes" primary="true" >{buttonLabel}</Button>
    </ColumnRight>

     </Container>
     </Section>
    )
}

export default ContentTwo
