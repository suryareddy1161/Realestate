import React from 'react';
import "./Navbar1.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  let menu =document.querySelector(".menu")
  let toggle = document.querySelector(".toggle")
  const toggleClick=()=>{
      menu.classList.toggle("active")
  }
  const navigate = useNavigate();

  return (
    <div className='navbar1'>
    <div className='logo1'>Estate</div>
    <div className='toggle' onClick={toggleClick}>
    <i className='fas fa-bars ' ></i>
    </div>
    <div className='menu'>
    <ul>
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
