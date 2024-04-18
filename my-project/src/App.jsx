import React from 'react';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './HomePage/Shop/Shop';
import Produc from './HomePage/Shop/Produc';
import ProductDetails from './Items/ProductDetails';
import NavBar from './HomePage/NavigationBar/NavBar';
import Footer from './FooterComponent/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Registration' element={<Registration />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Login/:Home' element={<Home />} />
            <Route path='/products' element={<Shop />} />
            <Route path='/product' element={<Produc />} />
            <Route path='/Product/:id' element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


