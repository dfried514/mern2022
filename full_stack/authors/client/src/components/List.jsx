import React, { useState, useEffect } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
    
const List = (props) => {
    const { removeFromDom } = props;
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        setAuthors([...props.authors].sort((a, b) => a.name < b.name ? -1 : 1));
    }, [props.authors]);
    
    return (
        <ul>
            {authors.map( (author, i) =>
                    <li key={i}>
                        <p>{author.name}</p>
                        <EditButton authorId={author._id} />
                        <DeleteButton authorId={author._id} successCallback={removeFromDom} />
                    </li>
                )}
        </ul>
    )
}
export default List;
