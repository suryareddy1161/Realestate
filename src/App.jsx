import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fav from './Components/Fav/Fav';
import First from './Components/First/First';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/fav" element={<Fav />} /> 
      </Routes> 
      
    </BrowserRouter>
    </div>
    
  )
}

export default App
