import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


function Product() {
    const [data, setData] = useState([]);
    const Navigate=useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/Beds')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>

<div className="bg-red-700 bg-opacity-70 mx-auto  md:w-1/7 lg:w-1/7 xl:w-1/7 p-5" style={{margin:100}}>
  <h1 className="text-white text-center text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-bold mt-2">SHOP BY COLLECTIONS</h1>
</div>


        <div className="flex flex-wrap justify-center">
            {data.map((product) => (
                <div key={product.id} className="m-4">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt={product.Name} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.Name}</h2>
                                <p>₹{product.Price}</p>
                                <div className="card-actions">
                                
                                    <button className="btn btn-primary" onClick={()=>Navigate(`/product/${product.id}`)}>More</button>
                                    
                                </div>
                            </div>
                        </div>
                    
                </div>
            ))}
        </div>
        
        </>
    );
}

export default Product;

