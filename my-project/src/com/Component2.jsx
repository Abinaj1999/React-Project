import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from './Context';
import NavBar from '../HomePage/NavigationBar/NavBar';
import Footer from '../FooterComponent/Footer';


//For search I have created this component using context.
function Component2() {
  const { search } = useContext(userContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const Navigate=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/Beds`)
      .then((response) => {
        const filtered = response.data.filter(item => item.Name.toLowerCase().includes(search.toLowerCase()));
        setFilteredItems(filtered);
      })
      .catch((error) => console.log(error));
  }, [search]);
  

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
                  <button className="btn btn-primary" onClick={()=>Navigate(`/product/${product.id}`)}> More</button>
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

export default Component2;