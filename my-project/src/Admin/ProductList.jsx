import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

function ProductList() {
    const [data, setData] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/Beds')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:3000/Beds/${productId}`)
            .then(() => {
                setData(data.filter(product => product.id !== productId));
                console.log("Product deleted successfully!");
            })
            .catch((error) => console.log(error));
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleSubmitEdit = (updatedProduct) => {
        axios.put(`http://localhost:3000/Beds/${updatedProduct.id}`, updatedProduct)
            .then((response) => {
                const updatedData = data.map(product => {
                    if (product.id === updatedProduct.id) {
                        return response.data;
                    }
                    return product;
                });
                setData(updatedData);
                setEditingProduct(null); 
                console.log("Product updated successfully!");
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
        <Admin/>
            <div>
                <h1 style={{ fontSize: "40px", textAlign: "center", fontWeight: "bolder", marginTop: "30px" }}>List of Products</h1>
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
                                <p>{product.Price}</p>
                                <p>{product.Description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={() => handleDelete(product.id)}>Delete</button>
                                    <button className="btn btn-secondary" onClick={() => handleEdit(product)}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{margin:200}}>
          
            {editingProduct && (
                <div className="edit-form">
                    <h2 style={{textAlign:'center',color:"red" , fontSize:25,fontWeight:600}}>Edit Product</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitEdit(editingProduct);
                    }}>
                        <ul style={{textAlign:'center'}}>
                            <li>
                            <label>Item:</label>
    <textarea
        style={{ width: "100%", height: "50px", marginTop: "5px", padding: "5px" }}
        value={editingProduct.item}
        onChange={(e) => setEditingProduct({ ...editingProduct, item: e.target.value })}
    ></textarea>
                            </li>
                            <li>
                            <li>
    <label>Name:</label>
    <textarea
        style={{ width: "100%", height: "50px", marginTop: "5px", padding: "5px" }}
        value={editingProduct.Name}
        onChange={(e) => setEditingProduct({ ...editingProduct, Name: e.target.value })}
    ></textarea>
</li>

                            </li>
                            <li>
                            <li>
    <label>Image:</label>
    <textarea
        style={{ width: "100%", height: "50px", marginTop: "5px", padding: "5px" }}
        value={editingProduct.image}
        onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
    ></textarea>
</li>

                            </li>
                            <li>
                            <li>
    <label>Price:</label>
    <textarea
        style={{ width: "100%", height: "50px", marginTop: "5px", padding: "5px" }}
        value={editingProduct.Price}
        onChange={(e) => setEditingProduct({ ...editingProduct, Price: e.target.value })}
    ></textarea>
</li>

                            </li>
                            <li>
    <label>Description:</label>
    <textarea
        style={{ width: "100%", height: "200px", marginTop: "5px", padding: "5px" }}
        value={editingProduct.Description}
        onChange={(e) => setEditingProduct({ ...editingProduct, Description: e.target.value })}
    ></textarea>
</li>

                        </ul>
                        <button type="submit" style={{ display: "block", margin: "0 auto" ,background:"black",color:"white",height:30,width:100}}>Submit</button>

                    </form>
                    
                    </div>
               
                
            )}
             </div>
        </>
    );
}

export default ProductList;

