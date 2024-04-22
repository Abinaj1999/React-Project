import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./NavBar.css";
import { userContext } from '../../com/Context';
import { useContext } from 'react';

function NavBar() {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const { setCategory} = useContext(userContext);
  const { setSearch} = useContext(userContext);

  const Navigate = useNavigate();
 
  const userId = localStorage.getItem("id");


  useEffect(() => {

    // to fetch  cart data user can get this cart item
    axios.get(`http://localhost:3000/carts`)
      .then((response) => {
        const userCart = response.data.filter(item => item.userid === userId);
        setCartData(userCart);
        setTotalPrice(calculateTotalPrice(userCart));
      })
      .catch((error) => console.log(error));

// Fetch user data- retrieve information about the logged-in user

    axios.get(`http://localhost:3000/USERS/${userId}`)
      .then((response) => {
        setLoggedIn(response.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  
  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + parseInt(item.Price) * item.Quantity, 0);
  };

  const handleRemoveProduct = (productId, index) => {
    axios.delete(`http://localhost:3000/carts/${productId}`)
      .then(() => {
        const updatedCart = [...cartData];
        updatedCart.splice(index, 1);
        setCartData(updatedCart);
        setTotalPrice(calculateTotalPrice(updatedCart));
        window.location.reload();
      })
      .catch((error) => console.log(error));
     
  };

  
  const handleLoggedOut = () => {
    localStorage.clear();
    window.location.reload();
  };


  const SearchOn = (e) => {
    if (e.key === "Enter") {
      Navigate("/Component2");
    }
  };


  return (
    <div className="navbar bg-base-100 flex flex-wrap justify-between items-center px-4 py-2 sm:px-6">
      <div className="flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-54">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li style={{marginLeft:12}}>CATEGORY
              <ol>
               <li><Link to="/Compo" onClick={() => setCategory('SOFA')}>SOFA</Link></li>
               <li><Link to="/Compo" onClick={() => setCategory('Chair')}>CHAIR</Link></li>
               <li><Link to="/Compo" onClick={() => setCategory('Table')}>TABLE</Link></li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="flex items-center sm:mt-0">
  <button tabIndex={0}>
    <Link to="/">
      <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl" style={{ color: "black", fontWeight: 800 }}>
        AFO FURNITURES
      </h1>
    </Link>
  </button>
</div>
      </div>

      <div className="flex items-center ">
        <div>
          <input onChange={(e) => setSearch(e.target.value)} onKeyDown={SearchOn} type="text" placeholder="Search" className="input input-bordered" />
        </div>

        <div className="dropdown dropdown-end ml-6 relative">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    <div className="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 00-4 0zM17 21a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
      <span className="badge badge-sm indicator-item">{cartData.length}</span>
    </div>
  </div>
  <div tabIndex={0} className="absolute right-0 mt-2 z-10 card card-compact dropdown-content bg-white shadow-lg w-72 rounded-lg border border-gray-200">
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
      {cartData.map((product, index) => (
        <div key={`cartItem_${index}`} className="flex items-center justify-between mb-4">
          <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded" />
          <div className="ml-3">
            <h4 className="text-sm font-semibold">{product.Name}</h4>
            <p className="text-xs text-gray-600">Price: ₹{product.Price}</p>
            <p className="text-xs text-gray-600">Quantity: {product.Quantity}</p>
          </div>
          <button className="text-xs text-red-500 font-semibold" onClick={() => handleRemoveProduct(product.id, index)}>Remove</button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-lg">Total:</span>
        <span className="font-semibold text-lg">${totalPrice}</span>
      </div>
      <button className="mt-4 py-2 px-4 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
        Purchase
      </button>
    </div>
  </div>
</div>
<div style={{ borderRadius: '30px', background: '', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '250px'}}>
  {loggedIn ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button style={{ color: 'white', background: "DodgerBlue", fontSize: '16px', borderRadius: '5px', padding: '5px 50px', marginRight: '10px', border: 'none', cursor: 'pointer' }}>{loggedIn.FirstName}</button>
      <button style={{ color: 'white', background: 'black', fontSize: '17px', borderRadius: '5px', padding: '5px 10px', border: '1px solid white', cursor: 'pointer' }} onClick={handleLoggedOut}>Logout</button>
    </div>
  ) : (
    <div style={{marginLeft:110}}>
      <button style={{ color: 'white', background: 'black', fontSize: '17px', borderRadius: '5px', padding: '5px 10px', border: '1px solid white', cursor: 'pointer' }} ><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></button>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default NavBar;
