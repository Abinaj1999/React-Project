import React from 'react';
import Header from '../HomePage/Header';
import Produc from '../HomePage/Shop/Product';
import NavBar from '../HomePage/NavigationBar/NavBar';
import Footer from "../FooterComponent/Footer"

function Home() {
  return (
  <>
    <NavBar />
  <div>
     <Header/>
  </div>
  <div>
     <Produc/>
  </div>
  <Footer/>
  </>
  );
}

export default Home;
