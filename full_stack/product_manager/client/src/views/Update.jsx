import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product)
                setLoaded(true)})
            .catch(err => console.error(err));
    }, [id]);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {})
            .catch(err => console.error(err));

        navigate('/products');
    }
    
    return (
        <div>
            <h1>Update</h1>
            { 
                loaded && 
                (<Form 
                    initialProduct={product}
                    onProductSubmit={updateProduct}
                />)
            }
            <p><Link to={'/products/'}>Product List</Link></p>
        </div>
    )
}
export default Update;
