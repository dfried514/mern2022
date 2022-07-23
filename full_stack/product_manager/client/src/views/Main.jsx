import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
    
const Main = props => {
    const { reloaded } = props;
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(reloaded);
    
    useEffect(() => {
        console.log('effecting...');
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[loaded, reloaded]);

    const removeFromDom = productId => setProducts(products.filter(p => p._id !== productId));

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
        .then(() => axios.get('http://localhost:8000/api/products'))
        .then(res => setProducts(res.data.products))
        .catch(err=>console.error(err))
    }
    
    return (
        <div>
            <Form  initialProduct={{title: '', price: '', description: ''}}
                onProductSubmit={createProduct}
            />
            <hr />
            {
                loaded && 
                <List 
                    products={products} 
                    removeFromDom={removeFromDom}
                />
            }
        </div>
    )
}
export default Main;
