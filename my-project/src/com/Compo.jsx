import React, { useEffect, useState } from 'react';
import { userContext } from './Context';
import { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../HomePage/NavigationBar/NavBar';
import Footer from '../FooterComponent/Footer';

//*for Category I have created this component using context.*//

function Compo() {
  const [filteredItems, setFilteredItems] = useState([]);
  const { category } = useContext(userContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Beds`)
      .then((response) => {
        setFilteredItems(response.data.filter(item => item.item === category));
      })
      .catch((error) => console.log(error));
  }, [category]); 

  return (

    <>
    <NavBar/>
    <div className="flex flex-wrap justify-center">
      {filteredItems.map((product) => (
        <div key={product.id} className="m-4">
       
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={product.image} alt={product.Name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.Name}</h2>
                <p>${product.Price}</p>
                <div className="card-actions">
                  <button className="btn btn-primary"><Link to={`/product/${product.id}`}> More</Link></button>
                </div>
              </div>
            </div>
         
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}

export default Compo;

