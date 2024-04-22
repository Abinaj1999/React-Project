import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.simplysofas.in/assets/images/homegif.gif)',opacity:0.9}}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold" style={{fontWeight:1000}}>Hello there</h1>
          <p className="mb-20"style={{fontWeight:700,fontSize:20}}>Welcome to our AFO FURNITURES website.</p>
          <Link to={"/login"}>
            <button className="btn btn-primary hover:bg-red-800 transition-colors duration-300 ease-in-out" style={{outline:0,border:0}}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

