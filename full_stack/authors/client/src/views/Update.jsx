import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';

const Update = props => {
    const { setAuthorsUpdated } = props;
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [badId, setBadId] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data.record)
                setBadId(false);
            })
            .catch(() => setBadId(true))
    }, [id, formErrors]);
 
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, {name: author.authorName})
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
            <h3>Edit this author:</h3>
            <hr />
            {
                badId && (<p>Error:  Id not found in system.</p>)
            }
            { 
                author && 
                (<Form 
                    initialAuthor={author}
                    onAuthorSubmit={updateAuthor}
                    formErrors={formErrors}
                />)
            }
        </>
    )
}
export default Update;
