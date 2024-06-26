import React, { useState } from 'react';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import StarComponent from './Pages/StarComponent.jsx';
import Product from './HomePage/Shop/Product.jsx';
import ProductDetails from './Items/ProductDetails';
import About from './Pages/About';
import { userContext } from './com/Context.jsx';
import Compo from './com/Compo.jsx';
import Component2 from './com/Component2.jsx';
import ProductList from './Admin/ProductList.jsx';
import ProductPost from './Admin/ProductPost.jsx';
import UserList from './Admin/UserList.jsx';
import Contact from './FooterComponent/Contact.jsx';



function App() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState([]);
  return (
    <div>
      <userContext.Provider value={{ category, setCategory, search, setSearch }}>
        <BrowserRouter> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Registration' element={<Registration />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Login/:Home' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/Product/:id' element={<ProductDetails />} />
              <Route path='about' element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path='Compo' element={<Compo />} />
              <Route path='Component2' element={<Component2 />} />
              <Route path="/Admin" element={<ProductList />} />
              <Route path="/productList" element={<ProductList/>} />
              <Route path="/ProductPost" element={<ProductPost/>} />
              <Route path="/UserList" element={<UserList />} />
              <Route path="*" element={<StarComponent />} />
              </Routes>
        </BrowserRouter>
        
      </userContext.Provider>
    </div>
  );
}

export default App;



