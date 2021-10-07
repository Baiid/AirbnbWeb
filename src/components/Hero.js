import React,{useState} from 'react';
import styled, { css } from "styled-components"
import { Button } from './Button';
import {IoMdArrowRoundForward} from "react-icons/io"
import {IoArrowForward, IoArrowBack} from "react-icons/io5"


const SliderButtons = styled.div `
position:absolute;
bottom:50px;
right:50px;
display:flex;
z-index:100;
`;


const HeroSection = styled.section`

height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;

`;

const HeroWrapper = styled.div `
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;

`;

const HeroSlide = styled.div `
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div `
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`;
const HeroImage = styled.img `
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;




`;
const HeroContent = styled.div `
position:relative;
display:flex;
flex-direction:column;
z-index:10;

max-width:1600px;
width:calc(100% - 100px);
color:white;

h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
}

p{
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    margin-bottom:1.2rem;
}

`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left:0.5rem;
`;

const arrowButtons = css `
width:50px;
height:50px;
color:white;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right:1rem;
user-select:none;
transition: 0.3s;

&:hover{
    background:#cd853f;
    transform: scale(1.05;)
}
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`



const Hero = ({slides}) => {

const [current, setCurrent]= useState(0)
const length = slides.length


const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
    console.log(current)
}

const prevSlide = () =>{
    setCurrent(current === 0 ? length -1 : current -1)
    console.log(current)
}


    return (
        <HeroSection>
             <HeroWrapper>

               {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index}>
                    {index === current && (

                        <HeroSlider>
                            <HeroImage src={slide.images} alt={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary="true"
                                  
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                        </HeroSlider>

                    )}

                    </HeroSlide>
                )

               })}
               <SliderButtons>
                   <PrevArrow onClick={prevSlide}/>
                   <NextArrow onClick={nextSlide}/>
               </SliderButtons>
             </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
