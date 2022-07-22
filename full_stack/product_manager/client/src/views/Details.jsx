import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
    
const Detail = props => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${product._id}`)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        
        navigate('/products');
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price:  {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={`/products/${product._id}/edit`}>Edit</Link></p>
            <button onClick={ e => deleteProduct() } >Delete</button>
            <p><Link to={'/products/'}>Product List</Link></p>
        </div>
    )
}
export default Detail;
