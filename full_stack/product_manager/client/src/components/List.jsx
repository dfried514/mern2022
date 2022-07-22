import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const List = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => removeFromDom(productId))
            .catch(err => console.error(err));
    }
    
    return (
        <ul>
            {props.products.map( (product, i) =>
                <li key={i}>
                    <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={ e => deleteProduct(product._id) } >
                        Delete
                    </button>
                </li>
            )}
        </ul>
    )
}
export default List;
