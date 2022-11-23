import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

function First() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <CardContainer/>
    </div>
  )
}

export default First;
