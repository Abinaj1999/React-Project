import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import NavBar from '../HomePage/NavigationBar/NavBar';
import Footer from '../FooterComponent/Footer';


function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartData, setCartData] = useState([]);
    const userId = localStorage.getItem("id");
    const { id } = useParams();
    const Navigate= useNavigate();

    useEffect(() => {

//To fetch the product data.
        axios.get(`http://localhost:3000/Beds/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => console.log(error));
// User able to add only one time the same product.
        axios.get(`http://localhost:3000/carts`)
            .then((response) => {
                const userCart = response.data.filter(item => item.userid === userId);
                setCartData(userCart);
            })
            .catch((error) => console.log(error));
    }, [id, userId]);

// Increasing and decreasing the quantity.

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

//product is added to the cart using some function comparing with id if the product is alrady there it wont allow us to add to the cart*//

    const addToCart = () => {
        const isProductInCart = cartData.some(item => item.id === product.id);

        if (isProductInCart) {
            alert('This product is already in your cart.');
            return;
        }

        axios.post('http://localhost:3000/carts', { userid: userId, ...product, Quantity: quantity })
            .then((response) => {
                if (response && response.data) {
                    alert('Product added to cart successfully!');
                    window.location.reload();
                } else {
                    console.error('Error adding product to cart: Invalid response data', response.data);
                    alert('Error adding product to cart.');
                }
            })
            .catch((error) => {
                console.error('Error adding product to cart:', error);
                alert('Error adding product to cart. Please try again later.');
            });
    }

    return (
        <>
            <NavBar />
            <div className="container mx-auto mt-8">
                {product && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src={product.image} alt="Product" className="w-full h-auto" style={{width:350}}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4">{product.Name}</h1>
                            <p className="mb-4">{product.Description}</p>
                            <p className="text-lg font-semibold mb-4">Price: ₹{product.Price}</p>
                            <div className="flex items-center mb-4">
                                <h2 className="mr-4">Quantity:</h2>
                                <button className="btn-quantity" onClick={decreaseQuantity} style={{width:40}}>-</button>
                                <span className="mx-4 text-xl font-semibold">{quantity}</span>
                                <button className="btn-quantity" onClick={increaseQuantity} style={{width:40}}>+</button>
                            </div>
                            <div>
                                {localStorage.getItem("id") ? (
                                    <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                                ) : (
                                    <button className="btn btn-primary" onClick={()=>Navigate("/Login")}>Login</button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ProductDetails;










