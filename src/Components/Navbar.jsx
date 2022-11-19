import React from 'react'
import "./Nav.css"
function Navbar() {
  return (
    <div className='navbar'>
       Realestate
      <span className='rent'>Rent</span>
      <span className='sell'>Sell</span>
      <span className='buy'>Buy</span>
      <button className='fav'>Fav</button>
      <button className='login'>Login</button>
      <button className='signin'>Sign-in</button>
    </div>
  )
}

export default Navbar
