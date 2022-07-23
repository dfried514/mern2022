import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from './../components/DeleteButton';
    
const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price:  {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={`/products/${product._id}/edit`}>Edit</Link></p>
            <DeleteButton productId={product._id} successCallback={() => navigate('/products')}/>
            <p><Link to={'/products/'}>Product List</Link></p>
        </div>
    )
}
export default Detail;
