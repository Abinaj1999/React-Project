import React, { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

function ProductPost() {
    const [text, setText] = useState({
        item: "",
        Name: "",
        Price: "",
        image: "",
        Quantity: "1",
        Description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Beds', text)
            .then((response) => {
                alert("Product added successfully");
                
                setText({
                    item: "",
                    Name: "",
                    Price: "",
                    image: "",
                    Quantity: "1",
                    Description: ""
                });
            })
            .catch((error) => {
                console.log("Error adding product:", error);
            });
    };

    return (
        <>
            <Admin/>
            <div className="admin-dashboard">
                <h1 className="text-3xl font-bold mb-6"style={{textAlign:'center'}}>New Product Posting</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold mb-1">Item</label>
                            <input
                                type='text'
                                placeholder='Item'
                                name='item'
                                value={text.item}
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
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
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
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
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
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
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
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
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block font-bold mb-1">Description</label>
                            <textarea
                                placeholder='Description'
                                name='Description'
                                value={text.Description}
                                onChange={(e) => setText({ ...text, [e.target.name]: e.target.value })}
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

