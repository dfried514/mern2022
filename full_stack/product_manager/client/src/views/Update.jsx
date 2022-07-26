import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const Update = props => {
    const { setProductsUpdated } = props;
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [badId, setBadId] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product)
                setBadId(false);
            })
            .catch(() => setBadId(true))
    }, [id, formErrors]);
 
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(() => setProductsUpdated(false))
            .then(() => navigate('/products'))
            .catch(err => {
                if (err.response.data.code === 11000) 
                setFormErrors({...formErrors, duplicateTitleError: {message: 'Title already in use.'}});
                if (err.response.data.errors) 
                    setFormErrors({...formErrors, ...err.response.data.errors});
            });
    }
    
    return (
        <>
            <h1>Update</h1>
            {
                badId && (<p>Id not found in system.  Try again:</p>)
            }
            { 
                product && 
                (<Form 
                    initialProduct={product}
                    onProductSubmit={updateProduct}
                    formErrors={formErrors}
                />)
            }
            <p><Link to={'/products/'}>Product List</Link></p>
        </>
    )
}
export default Update;
