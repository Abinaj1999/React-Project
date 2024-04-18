import { Axios } from "axios";


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Homm() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Beds')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>

        <div>
        <h1 style={{fontSize:"40px",textAlign:"center", fontWeight:"bolder", marginTop:"30px"}}>SHOP BY COLLECTIONS</h1>
    </div>

        <div className="flex flex-wrap justify-center">
            {data.map((product) => (
                <div key={product.id} className="m-4">
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt={product.Name} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.Name}</h2>
                                <p>{product.Description}</p>
                                <p>{product.Price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        </>
    );
}

export default Homm
