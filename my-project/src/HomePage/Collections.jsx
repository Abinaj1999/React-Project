import React from 'react'

function Collections() {
  return (
    <>
    {/* Added the text for and designed it */}
    <div>
        <h1 style={{fontSize:"40px",textAlign:"center", fontWeight:"bolder", marginTop:"30px"}}>SHOP BY COLLECTIONS</h1>
    </div>

 {/* Items */}
 {/* 1 */}
 
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Collections
