import React from 'react';
import { useNavigate } from "react-router-dom";

const EditButton = props => {
    const { authorId } = props; 
    const navigate = useNavigate();

    const editAuthor = () => {
        navigate(`/edit/${authorId}`);
    }

    return (
        <button onClick={editAuthor}>
            Edit
        </button>
    )
}
export default EditButton;
