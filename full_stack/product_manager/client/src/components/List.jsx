import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
    
const List = (props) => {
    const { removeFromDom } = props;
    const [products, setProducts] = useState(props.products);

    useEffect(() => {
        setProducts(props.products);
    }, [props.products]);

    const sortBy = field => {
        if (field === 'noField') 
            setProducts(props.products);
        const fieldCompare = field => (a,b) => a[field] < b[field] ? -1 : 1;
        setProducts([...products.sort(fieldCompare(field))]);
    }
    
    return (
        <>
            <label>Sort By:   </label>
            <select onChange={e => sortBy(e.target.value)}>
                <option value="noField">--</option>
                <option value="title">title</option>
                <option value="price">price</option>
                <option value="description">description</option>
            </select>
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
        </>
    )
}
export default List;
