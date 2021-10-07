import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import {FaTimes} from "react-icons/fa"

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
display: grid;
align-items:center;
top: ${({isOpen}) => (isOpen ?  "0" : "-100%")};;
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen}) => (isOpen ?  "1" : "0")};

background:orange;
`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
cursor:pointer;
outline:none;

`
const CloseIcon = styled(FaTimes)`
color:black;
`
const DropdownWrapper = styled.div`
`
const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4, 80px);
text-align:center;
margin-bottom:4rem;



`
const DropdownLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:1.5rem;
text-decoration:none;
list-style:none;
cursor:pointer;

transition: 0.2s ease-in-out;

&:hover{
    color:gray;
}


`
const BtnWrap = styled.div`
display:flex;
justify-content:center;
`

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen}  onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
            <DropdownMenu>
                {menuData.map ((item, index) => (
                    <DropdownLink to ={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                ))}
            </DropdownMenu>
                    <BtnWrap>
                        <Button primary="true"  big="true" to="/contact">
                            Contact Us
                        </Button>
                    </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
