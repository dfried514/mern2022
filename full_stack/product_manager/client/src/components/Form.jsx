import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        
        setTitle("");
        setPrice("");
        setDescription("");

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit={ handleSubmit }>
                <label>Title:   </label>
                <input type="text" name="title" value={ title } onChange={ e => setTitle(e.target.value)}/>
                <br /><br />
                <label>Price:   </label>
                <input type="text" name="price" value={ price } onChange={ e => setPrice(e.target.value)}/>
                <br /><br />
                <label>Description:   </label>
                <input type="text" name="description" value={ description } onChange={ e => setDescription(e.target.value)}/>
                <br /><br />
                <input type="submit" value="Create"/>
            </form>
        </>
    )
}
export default Form;
