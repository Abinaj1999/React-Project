import React from 'react';
import { Link } from 'react-router-dom';



function Admin() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/UserList"}>User Maintainance</Link></li>
        <li><Link to={"/productList"}>Product Maintainance</Link></li>
        <li><Link to={"/ProductPost"}>Product Posting</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">AFO Furnitures</a>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle text-red-600 hover:bg-red-100 hover:text-red-800 transition duration-300" style={{width:100,fontSize:18,fontWeight:800}}>
    <Link to={'/'}>Logout</Link>
  </button>
</div>

</div>

    </div>
  )
}

export default Admin
