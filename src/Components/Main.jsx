import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./Nav.css"
import { addToCart , propertyType_search ,price_search,date_search,location_search ,filtered_data} from '../Redux/cartSlice';
import Navbar from './Navbar';
import CardContainer from './CardContainer';


function Main() {

  const [time , setTime] = useState("")
  const [location, setLocation] = useState("");
  const [price,setPrice] = useState("");
  const [propertyType,setPropertyType] = useState("");

  const data = useSelector((state) => state.cartSlice.cartItems)

  const dispatch = useDispatch()

  
  // console.log(ele)

/* 
  const clickHandler = (params) => {
    console.log(params)

    dispatch(addToCart(params))

  } */
  const searchHandler = (...param) => {
    if(location.length > 0 ){
      dispatch(location_search(param[0]));
    }else if(price.length > 0){
      dispatch(price_search(param[1]))
    }else if(time.length > 0){
      dispatch(date_search(param[3]))
    }else if(propertyType.length > 0){
      dispatch(propertyType_search(param[2]))
    }
    dispatch(param);
    
  }

  
  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }

  const priceHandler = (e) => {
    setPrice(e.target.value);
    console.log(price)
  }
  const timeHandler =(e) => {
    setTime(e.target.value);
    console.log(time)
  }
  const propertyHandler = (e) => {
    setPropertyType(e.target.value);
    console.log(propertyType)
  }

  
  return (
    <div>
      <Navbar />
      <div className='search'>
        <span className='searchheading'><b>Search properties to rent</b></span>
        <input className='searchinput' type={"search"} placeholder="search with searchbar"></input>
      </div>
      <div className='card'>
        <div className='loc'>
          <div>Location</div>
         {/*  <select>
            <option >Hyderabad</option>
            <option>Bangalore</option>
            <option>Delhi</option>
          </select> */}
          <input type="text"  name="location" onChange={changeHandler}/>
        </div>
        <div className='cardsame'>
          <div>When</div>
          <input type="date"  name="time" onChange={timeHandler}/>
        </div>
        <div className='cardsame'>
          <div >price</div>
          <select name="price" id="cars" className="search-select" onChange={priceHandler}>
          <option value="2000-5000">2000-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000-50000">20000-50000</option>
        </select>
        </div>
        <div className='cardsame'>
          <div>Property</div>
          <select name="price" id="cars" className="search-select" onChange={propertyHandler}>
          <option value="1bhk">1bhk</option>
          <option value="2bhk">2bhk</option>
          <option value="3bhk">3bhk</option>
          <option value="4bhk">4bhk</option>
          </select>
        </div>
        <div className='searchbtn'>
        <button className="search-btn" onClick={()=>searchHandler(location,price,propertyType,time)}>Search</button>
        </div>
      </div>
      <div>
        <CardContainer/>
      </div>
      
     
    </div>
  )
}

export default Main
