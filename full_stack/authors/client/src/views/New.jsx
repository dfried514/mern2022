import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const New = props => {
    const { setAuthorsUpdated } = props;
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
 
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', {name: author.authorName})
        .then(() => setAuthorsUpdated(false))
        .then(() => navigate('/'))
        .catch(err => {
            if (err.response.data.code === 11000) 
                setFormErrors({duplicateNameError: {message: 'Name already in use.'}});
            else if (err.response.data.errors) 
                setFormErrors(err.response.data.errors);
            else 
                setFormErrors({unknownError: {message: 'Input invalid'}});
        });
    }
    
    return (
        <>
            <h1>Favorite Authors</h1>
            <p><Link to={'/'}>Home</Link></p>
            <h3>Add a new author:</h3>
            <hr />
            <Form 
                initialAuthor={{name: ''}}
                onAuthorSubmit={createAuthor}
                formErrors={formErrors}
            />
        </>
    )
}
export default New;
