import React, { useState, useEffect } from 'react';

const Form = props => {
    const { initialProduct, onProductSubmit } = props;

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
        
    useEffect(() => {
        setTitle(initialProduct.title);
        setPrice(initialProduct.price);
        setDescription(initialProduct.description);
    },[initialProduct]);

    const handleSubmit = e => {
        e.preventDefault();
        onProductSubmit({title, price, description});
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>Title:   </label>
            <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value)}/>
            <br /><br />
            <label>Price:   </label>
            <input type="text" value={ price } onChange={ e => setPrice(e.target.value)}/>
            <br /><br />
            <label>Description:   </label>
            <input type="text" value={ description } onChange={ e => setDescription(e.target.value)}/>
            <br /><br />
            <input type="submit" value="Create"/>
        </form>
    )
}
export default Form;
