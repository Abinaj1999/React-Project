import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        if (storedLoggedIn === 'true') {
            setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3000/Beds/`)
            .then((response) => {
                const products = response.data.filter(item => item.id == id);
                setProduct(products[0]);
            })
            .catch((error) => console.log(error));
    }, [id]);

    const decreaseQuantity = () => {
        if (product.Quantity > 1) {
            setProduct({ ...product, Quantity: product.Quantity - 1 });
        }
    };

    const increaseQuantity = () => {
        setProduct({ ...product, Quantity: product.Quantity + 1 });
    };

    const addToCart = (product) => {
        if (loggedIn) {
            axios.post('http://localhost:3000/carts', product)
                .then((response) => {
                    console.log('Product added to cart:', response.data);
                    alert('Product added to cart successfully!');
                })
                .catch((error) => {
                    console.error('Error adding product to cart:', error);
                    alert('Error adding product to cart. Please try again later.');
                });
        } else {
            alert('Please login to add items to cart.')
        }
    };

    return (
        <div>
            {product && (
                <div>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={product.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.Name}</h2>
                            <p>{product.Description}</p>
                            <p>{product.Price}</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn-quantity"
                                    style={{ color: "red" }}
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span className="quantity">{product.Quantity}</span>
                                <button
                                    className="btn-quantity"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <div className="card-actions justify-end">
                                {loggedIn ? (
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to cart</button>
                                ) : (
                                    <button className="btn btn-primary" >Login</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;





