import React from 'react';
import Header from '../HomePage/Header';
import Collections from '../HomePage/Collections';
import Produc from '../HomePage/Shop/Produc';

import Shop from '../HomePage/Shop/Shop';
import NavBar from '../HomePage/NavigationBar/NavBar';


function Home() {
  return (
  <>
  
  <div>
     <Header/>
  </div>


  <div>
     <Produc/>
  </div>
  
  </>
  );
}

export default Home;
