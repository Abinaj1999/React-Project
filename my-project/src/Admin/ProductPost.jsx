// AdminDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

function ProductPost() {
    const [text, setText] = useState({
        item: "",
        Name: "",
        Price: "",
        image: "",
        Quantity: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Beds', text)
            .then((response) => {
                console.log("Product added successfully:", response.data);
                
                setText({
                    item: "",
                    Name: "",
                    Price: "",
                    image: "",
                    Quantity: ""
                });
            })
            .catch((error) => {
                console.log("Error adding product:", error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText((prevText) => ({
            ...prevText,
            [name]: value
        }));
    };

    return (
        <>
            <Admin/>
            <div className="admin-dashboard">
                <h1 className="text-3xl font-bold mb-6"style={{textAlign:'center'}}>Product Posting</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold mb-1">Item</label>
                            <input
                                type='text'
                                placeholder='Item'
                                name='item'
                                value={text.item}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-1">Name</label>
                            <input
                                type='text'
                                placeholder='Name'
                                name='Name'
                                value={text.Name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-1">Price</label>
                            <input
                                type='text'
                                placeholder='Price'
                                name='Price'
                                value={text.Price}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-1">Image</label>
                            <input
                                type='text'
                                placeholder='Image URL'
                                name='image'
                                value={text.image}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold mb-1">Quantity</label>
                            <input
                                type='number'
                                placeholder='Quantity'
                                name='Quantity'
                                value={text.Quantity}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary w-full">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProductPost;
