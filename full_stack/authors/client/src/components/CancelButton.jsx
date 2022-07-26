import React from 'react';
import { useNavigate } from "react-router-dom";

const CancelButton = () => { 
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    }

    return (
        <button onClick={navigateToMain}>
            Cancel
        </button>
    )
}
export default CancelButton;
