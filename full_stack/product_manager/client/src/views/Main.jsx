import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
    
const Main = props => {
    const { productsUpdated, setProductsUpdated } = props;
    const [products, setProducts] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products);
                setProductsUpdated(true);
            })
            .catch(err => console.error(err));
    },[productsUpdated]);

    const removeFromDom = productId => setProducts(products.filter(p => p._id !== productId));

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
        .then(() => setProductsUpdated(false))
        .catch(err => {
            if (err.response.data.code === 11000) 
            setFormErrors({...formErrors, duplicateTitleError: {message: 'Title already in use.'}});
            if (err.response.data.errors) 
                setFormErrors({...formErrors, ...err.response.data.errors});
        });
    }
    
    return (
        <>  
            <h1>Add a Product</h1>
            <Form  
                initialProduct={{title: '', price: '', description: ''}}
                onProductSubmit={createProduct}
                formErrors={formErrors}
            />
            <hr />
            {
                products && 
                (<div>
                    <h1>Product List</h1>
                    <List 
                        products={products} 
                        removeFromDom={removeFromDom}
                    />
                </div>)
            }
        </>
    )
}
export default Main;
