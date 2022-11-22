import React from 'react'
import "./Nav.css"

import { useSelector } from 'react-redux'

function Fav() {
  const Emptycart =useSelector((state)=>state.cartSlice.EmptyCart)
    console.log(Emptycart)
  return (
    <div>
      {/* <Navbar/> */}
     <h1 className='wish'> Your Wishlist</h1>
      <div className='homecards'>
      {Emptycart.map((item,id)=> {
        return(
          <div key={id} className='cardsh'> 
        <div>{item.name}</div>
        <img className='img' src={item.img}></img>
        <div>{item.price} /per Month</div>
        <div>Location :- {item.location} </div>
        <div>Type:- {item.propertyType}</div>
        <div>Date :- {item.date}</div>
      </div>
        )
      
      })
      }
      </div> 
    </div>
  )
}

export default Fav;
