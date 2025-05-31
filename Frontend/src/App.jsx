import { useState } from 'react'
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import Home from "./Pages/Home"
import NavBar from "./Component/NavBar"



function App() {

  return (
   <BrowserRouter>
   <NavBar/>
  <div className="pages">
    <Routes>
      <Route path='/' element={<Home/> }>
        
      </Route>
    </Routes>
  </div>
   </BrowserRouter>
    
  )
        
}

export default App
