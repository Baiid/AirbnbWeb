import React from 'react'
import styled, {css} from "styled-components/macro"
import {Link} from "react-router-dom"
import {menuData} from "../data/MenuData"
import { Button } from './Button'
import{FaBars} from "react-icons/fa"



const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;

`

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;


@media screen and (max-width: 768px){
    display:none;
}
`

const NavLink = css`
color:black;
font-size:1.3rem;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
font-style:bold;
`


const Logo = styled(Link)`

${NavLink}




`


const MenuBars = styled(FaBars) `
display:none;


@media screen and (max-width: 768px){
    display:block;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%, 40%);
    color:white;


}
`

const NavMenu = styled.div `
display:flex;
align-items:center;
margin-right:-48px;


@media screen and (max-width: 768px){
    display:none;
}
`

const NavMenuLinks=styled(Link)`
transition: 0.2s ease-in-out;
${NavLink}

&:hover{
    color:white;
}
`

const NavBar = ({toggle}) => {
    return (
        <Nav>
        <Logo  to="/">London <b>Airbnb</b></Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
        {menuData.map((item,index) => (
            <NavMenuLinks to={item.link} key={index}>
                {item.title}
            </NavMenuLinks>

        ))}

        </NavMenu>
        <NavBtn>
            <Button to="/contact" primary="true">
                Contact Us
            </Button>
        </NavBtn>
      
        </Nav>
    )
}

export default NavBar
