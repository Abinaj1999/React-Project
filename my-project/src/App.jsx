import React from 'react';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Shop from './HomePage/Shop/Shop';
import Beds from './HomePage/Shop/Beds';
import Product from './Items/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Product/>} />
        <Route path='Registration' element={<Registration/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='Login/:Home' element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App

