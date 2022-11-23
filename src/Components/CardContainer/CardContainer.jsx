import React,{useState,useEffect} from 'react';
import Card from '../Card/Card';
import "./cardContainer.css";
import { useSelector, useDispatch } from 'react-redux';


const CardContainer = () => {
  const [state,setState] = useState([]);
  
  let filtered_data = useSelector((data)=>data.filtered_data);
  let data =  useSelector((data)=>data.estate_data);

  return (
    <div className="card-main">
      <div className='card-container'>
        {
          filtered_data.length === 0 ? 
          data.map((data,id)=>{
            return (
              <div key={id}>
              <Card data={data}/>
              </div>
            )
          }):
          filtered_data.map((data,id)=>{
            return (
              <div key={id}>
              <Card data={data}/>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default CardContainer