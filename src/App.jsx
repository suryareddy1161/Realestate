import React from 'react';
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import Navbar from './Components/Navbar' */
import Fav from './Components/Fav';
/* import Search from './Components/Search';
import Main from './Components/Main'; */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/fav" element={<Fav />} />
        {/* <Route path='/src' element={<Search/>}/> */}
      </Routes> 
      
    </BrowserRouter>
    </div>
    
  )
}

export default App
