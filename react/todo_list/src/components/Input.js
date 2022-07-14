import { useState } from 'react';

const Input = props => {
    const [item, setItem] = useState("");

    const addItem = e => {
        e.preventDefault();
        props.onAddItem(item);
        setItem("");
    }
    return (
        <form onSubmit = { addItem } >
            <div>
                <label>Todo Item:  </label>
                <input type="text" value={ item } onChange={ (e) => setItem(e.target.value) } />
            </div>
            <br />
            <input type="submit" value="Add Item"/>
        </form>
    )
}
export default Input;
