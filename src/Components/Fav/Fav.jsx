import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Fav.css";
import Navbar from '../Navbar/Navbar';


const Fav = () => {

  let liked_data = useSelector((data)=>data.liked_data);
  console.log(liked_data)
  return (
    <div>
      <div>
      <Navbar/>
      <h1 className='wish'>Your Wish List</h1></div>
     
    <div className='liked_main'>
      
      
      {
        liked_data.map((ele , id)=>{
          <div key={id}></div>
          return <Card data={ele}/>
        })
      }
    </div>
   
    </div>
  )
}

export default Fav;
