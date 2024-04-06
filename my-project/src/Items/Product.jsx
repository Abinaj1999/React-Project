import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Product')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <div className="flex flex-wrap">
            {data.map((d, i) => (
                <div key={i} className="m-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={d.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{d.Name}</h2>
                            <p>{d.Description}</p>
                            <p>{d.Price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div>

            <div>
            Product Features
            </div>

            <div> 
                <h4>Natural Appeal</h4>
<p>The rustic charm of the fascinating patterns of grains & fibers, immediately adds warmth to surroundings and blends the house with nature.</p>
<h4>Extensive Storage </h4>
<p>The bed is equipped with under storage which allows you to store your extra linen, suitcases, old clothes and much more without taking up a lot of room.</p>
<h4>Premium Aesthetics</h4>
<p>Zanza Bed is designed as a compact, cosy, convenient headboard for urban homes. Sporting premium finishes it is a perfect blend of utility and aesthetics.</p>
<h4>Easy To Maintain</h4>
<p>You no longer have to keep your weekends free for cleaning, simply use a cloth to wipe away dirt and dust to maintain the glossy appearance of the bed.</p>
</div>
            
        </div>

        </>
    );
}

export default Product;

   



