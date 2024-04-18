import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./NavBar.css";

function NavBar() {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/carts`)
      .then((response) => {
        setCartData(response.data);
        setTotalPrice(calculateTotalPrice(response.data));
      })
      .catch((error) => console.log(error));

    
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleRemoveProduct = (productId, index) => {
    axios.delete(`http://localhost:3000/carts/${productId}`)
      .then(() => {
        const updatedCart = [...cartData];
        updatedCart.splice(index, 1);
        setCartData(updatedCart);
        setTotalPrice(calculateTotalPrice(updatedCart));
      })
      .catch((error) => console.log(error));
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, product) => total + (parseFloat(product.Price.replace(',', '')) * product.Quantity), 0);
  };

  const handleLoggedIn = () => {
    axios.get('http://localhost:3000/USERS')
      .then((response) => {
        const users = response.data;
        if (users.length > 0) {
          setLoggedIn(true);
          localStorage.setItem('loggedIn', 'true');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const handleLoggedOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a tabIndex={0} className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end flex items-center">
        <button tabIndex={0} className="btn btn-ghost btn-circle">
          {/* Cart icon */}
        </button>

        {/* Cart dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 00-4 0zM17 21a2 2 0 100-4 2 2 0 000 4z" /></svg>
              <span className="badge badge-sm indicator-item">{cartData.length}</span>
            </div>
          </div>
          {/* Cart items */}
          <div tabIndex={0} className="mt-2 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            {cartData.map((product, index) => (
              <div key={`cartItem_${index}`} className="card-body">
                <img src={product.image} alt="Product" style={{ width: '50px', height: '50px' }} />
                <span className="font-bold text-lg" style={{alignItems:"center"}}>{product.Name}</span>
                <span className="text-info">{product.Price}</span>
                <span className="text-info">{product.Quantity}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block" onClick={() => handleRemoveProduct(product.id, index)}>Remove</button>
                </div>
              </div>
            ))}
            
            <div className="total-price">
              Total Price: ${(totalPrice)}
            </div>
          </div>
        </div>

        {/* Login and registration buttons */}
        <div style={{ borderRadius: 60, background: "blue", color: 'white', fontSize: 15, fontWeight: 500 }}>
          {loggedIn ? (
            <div style={{ borderRadius: 60, background: "red", color: 'white', fontSize: 15, fontWeight: 500 }}>
              <button style={{ margin: 10 }} onClick={handleLoggedOut}>Logout</button>
            </div>
          ) : (
            <div style={{ borderRadius: 60, background: "blue", color: 'white', fontSize: 15, fontWeight: 500 }}>
              <button style={{ margin: 10 }} onClick={handleLoggedIn}><Link to="/Login">Login</Link></button>
            </div>
          )}
        </div>

        {/* Home button */}
        <Link to="/" className="btn btn-ghost btn-circle">
          {/* Add your home icon here */}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;






