import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
    
const List = (props) => {
    const { products, removeFromDom } = props;
    
    return (
        <ul>
            {products.map( (product, i) =>
                <li key={i}>
                    <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <DeleteButton productId={product._id} successCallback={removeFromDom} />
                </li>
            )}
        </ul>
    )
}
export default List;
