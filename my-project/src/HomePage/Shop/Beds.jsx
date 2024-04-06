import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Beds() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Beds')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
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
    );
}

export default Beds;
