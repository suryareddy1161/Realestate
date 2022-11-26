import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
function Navbar() {
 /*  const menu =document.querySelector(".menu")
  const toggle1 = ()=>{
    document.querySelector(".toggle1")
  }
  const toggleClick=()=>{
      menu.className.toggle1("active")
  } */
  const [click,setClick]= useState(false)
 /*  
  const changecolor = () =>{
      if(window.scroll >=1){
          setColor(true)
      }
      else{
          setColor(false)
      }
  }
  window.addEventListener("scroll",changecolor) */
  const handleClick=()=>{
      setClick(!click)
  }
 

  return (
    <div className='navbar'>
    <div className='logo'>Estate</div>
    <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes  style={{color:'black'}} />)
                :(<FaBars  style={{color:"black"}} />)}
            </div>
    <div className='navmenu'>
    <ul className={click ? "navmenu active" : 'navmenu '}>
        <li><a href='/'>Home</a></li>
        <li><a>Rent</a></li>
        <li><a>Sell</a></li>
        <li><a>Buy</a></li>
        <li><Link to="/fav">Favirote</Link></li>
        <li><a  href='#'>login</a></li> 
        <li><a  href='#'>Sign-up</a></li>
    </ul>
   
    </div> 
   
</div>
  )
}

export default Navbar
