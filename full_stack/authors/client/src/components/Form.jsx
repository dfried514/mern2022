import React, { useState, useEffect } from 'react';
import CancelButton from './CancelButton';

const Form = props => {
    const { initialAuthor, onAuthorSubmit, formErrors } = props;
    const [authorName, setAuthorName] = useState('');
        
    useEffect(() => {
        setAuthorName(initialAuthor.name);
    },[initialAuthor]);

    const handleSubmit = e => {
        e.preventDefault();
        onAuthorSubmit({authorName});
            setAuthorName('');
    }

    return (
        <>
            {
                Object.values(formErrors) && (
                    <div>
                        {Object.values(formErrors).map((item, i) => <p key={i}>{item.message}</p>)}        
                    </div>
                )
            }
            <form onSubmit={ handleSubmit }>
                <label>Name:   </label>
                <input type="text" value={ authorName } onChange={ (e) => setAuthorName(e.target.value)}/>
                <br /><br />
                <input type="submit" value="Submit"/>
            </form>
            <CancelButton />
        </>
    )
}
export default Form;
