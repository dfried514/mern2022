import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import List from '../components/List';
    
const Main = props => {
    const { authorsUpdated, setAuthorsUpdated } = props;
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.records);
                setAuthorsUpdated(true);
            })
            .catch(err => console.error(err));
    },[authorsUpdated]);

    const removeFromDom = authorId => setAuthors(authors.filter(p => p._id !== authorId));

    return (
        <>  
            <h1>Favorite Authors</h1>
            <p><Link to={'/new/'}>Add an Author</Link></p>
            <h3>We have quotes by:</h3>
            <hr />
            {
                authors && 
                (<div>
                    <h1>Author List</h1>
                    <List 
                        authors={authors} 
                        removeFromDom={removeFromDom}
                    />
                </div>)
            }
        </>
    )
}
export default Main;
