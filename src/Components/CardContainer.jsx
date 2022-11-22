import React from "react"
import Card from "./Card";
import { addToCart,filtered_data } from '../Redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const CardContainer = () => {
   /*  const [state,setState] = useState([]); */
    
    let filtered_data = useSelector((data)=>data.filtered_data);
    const data = useSelector((state) => state.cartSlice.cartItems)
  
    return (
      <div className="card-main">
        <div className='card-container'>
          {
            filtered_data.length === 0 ? 
            data.map((data)=>{
              return (
                <Card data={data}/>
              )
            }):
            filtered_data.map((data)=>{
              return (
                <Card data={data}/>
              )
            })
          }
        </div>
  
      </div>
    )
  }
  
  export default CardContainer;