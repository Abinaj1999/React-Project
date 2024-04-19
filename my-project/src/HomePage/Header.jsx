import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.simplysofas.in/assets/images/homegif.gif)'}}>
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-20">Welcome to our AFO FURNITURES website.</p>
        <button className="btn btn-primary"><Link to={"/login"}>Get Started</Link></button>
      </div>
    </div>
  </div>
  )
}

export default Header
