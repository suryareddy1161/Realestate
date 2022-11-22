import React, { useState } from 'react';

import data from './CardsData';


export default function Search() {


 

  const [state, setState] = useState(data);

  const [search, setSearch] = useState({
    location: '',
    price: '',
  });
  /*
  const search = (event) => {
    if (event.target.value.length > 0) {
      const regex = new RegExp(event.target.value, 'gi');
      const matchedSites = state.filter(({ district }) =>
        district.match(regex)
      );

      setState([...matchedSites]);
    } else {
      setState(data);
    }
  }*/

  const datesearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const finalSearch = () => {
    if (search.location.length > 0) {
      let fi = state.filter((ele) => ele.location == search.location);

      setState([...fi]);
    }

    if (search.price.length > 0) {
      let fi = state.filter((ele) => ele.date == search.price);

      setState([...fi]);
    }
  };

  return (
    <>
     {/*   <input
        type="text"
        onChange={search}
        name="location"
        onChange={datesearch}
      />
      <input type="text" onChange={search} name="price" onChange={datesearch} /> */}
      <input></input> 
      <input></input>

      <button onClick={finalSearch}>Search</button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
       <div className='homecards'>
        {state.map((item, id) => {
          return (
            <div key={id} className='cardsh'>

              <div>{item.name}</div>
              <img className='img' src={item.img}></img>
              <div>{item.price} /per Month</div>
              <div>Location :- {item.location} </div>
              <div>Type:- {item.propertyType}</div>
              <div>Date :- {item.date}</div>
              <button className='add' onClick={() => clickHandler(item)}>Add To Fav</button>
            </div>
          )

        })
        }
      </div>
      </div>
    </>
  );
}
