import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom";
function Navbar() {
/*   const fav = ()=>{
    
  } */
  return (
    <div className='navbar'>
       Realestate
      <span className='rent'>Rent</span>
      <span className='sell'>Sell</span>
      <span className='buy'>Buy</span>
     {/*  <button className='fav' onClick={fav()}>Fav</button> */}
      <Link to="/fav" className='fav'>Fav</Link>
      <button className='login'>Login</button>
      <button className='signin'>Sign-in</button>
    </div>
  )
}

export default Navbar
