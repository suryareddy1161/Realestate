import { useState } from 'react'
import Home from './Components/Home'

import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
