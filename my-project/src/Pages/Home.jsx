import React from 'react';
import Header from '../HomePage/Header';
import NavBar from '../HomePage/NavBar';
import Collections from '../HomePage/Collections';
import Shop from '../HomePage/Shop/Shop';

function Home() {
  return (
  <>
  <div>
     <NavBar/>
  </div>

  <div>
     <Header/>
  </div>

  <div>
     <Shop/>
  </div>
  
  </>
  );
}

export default Home;
