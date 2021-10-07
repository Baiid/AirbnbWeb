
import React,{useState} from 'react';
import Content from './components/Content';
import ContentTwo from "./components/ContentTwo"
import ContentThree from "./components/ContentThree"
import Dropdown from './components/Dropdown';

import Hero from './components/Hero';
import NavBar from './components/Nav';
import { SliderData } from './data/SliderData';
import GlobalStyles from './globalStyles';
import {ContentDataOne, ContentDataThree, ContentDataTwo} from "./data/ContentData"
import Footer from './components/Footer';
import { FooterData } from './data/FooterData';


function App() {

const [isOpen, setIsOpen] = useState(false)

const toggle = () =>{
setIsOpen(!isOpen)

}


  return (
<>
<GlobalStyles />
<NavBar toggle={toggle}/>
<Dropdown isOpen={isOpen} toggle={toggle}/>
<Hero slides={SliderData}/>
<Content {...ContentDataOne}/>
<ContentTwo {...ContentDataTwo}/>
<ContentThree {...ContentDataThree} />
<Footer {...FooterData}/>
</>
  );
}

export default App;
