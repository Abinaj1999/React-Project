import React from 'react'
import { Link } from 'react-router-dom';


function StarComponent() {
  return (
    <div>
      <h1 style={{fontSize:55,textAlign:"center",color:"red", margin:300}}><Link to={"*"}>***Path is not defined***</Link></h1>
    </div>
  )
}

export default StarComponent
