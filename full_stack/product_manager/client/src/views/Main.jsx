import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
    
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);

    const removeFromDom = productId => setProducts(products.filter(p => p._id !== productId));
    
    return (
        <div>
            <Form/>
            <hr/>
            {loaded && <List products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;
