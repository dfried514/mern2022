import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

const Input = props => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("")
    const navigate = useNavigate();

    const submitData = e => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return (
        <form onSubmit = { submitData }>
            <label>Search for:  </label>
            <select onChange={ (e) => { setCategory(e.target.value) }}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
                <option value="films">films</option>
                <option value="species">species</option>
            </select>
            <br /><br />
            <label>ID:  </label>
            <input type="text" value={id}
                onChange = {(e) => { setId(e.target.value) } }/>
            <br /><br />
            <input type="submit" value="Search"/>
        </form>
    );
}
export default Input;
