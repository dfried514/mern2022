import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from './../components/DeleteButton';
    
const Detail = props => {
    const { setProductsUpdated } = props;
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [badId, setBadId] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(() => setBadId(true))
    }, [id]);

    const onDelete = () => {
        setProductsUpdated(false);
        navigate('/products');
    }

    return (
        <>
            <h1>Product Details</h1>
                {
                    badId && (<p>Id not found in system.  Try again:</p>)
                }
            { 
                product &&
                    (<div>
                        <p>Title: {product.title}</p>
                        <p>Price:  {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p><Link to={`/products/${product._id}/edit`}>Edit</Link></p>
                        <DeleteButton productId={product._id} successCallback={onDelete}/>
                    </div>)
            }
            <p><Link to={'/products/'}>Product List</Link></p>
        </>
    )
}
export default Detail;
