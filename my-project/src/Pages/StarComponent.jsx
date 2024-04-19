import React from 'react'
import { Link } from 'react-router-dom';



function StarComponent() {
  return (
    <div>
      <h1 style={{fontSize:40,textAlign:"center",color:"blue", margin:200}}><Link to={"*"}>....Path is not defined...</Link></h1>
    </div>
  )
}

export default StarComponent
