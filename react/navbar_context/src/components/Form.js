import React, { useContext } from 'react';
import { WrapperContext } from '../contexts/Wrapper';

const Form = () => {
    const [name, setName] = useContext(WrapperContext);

    return (
        <form>
            <input type="text" value={ name } onChange={ (e) => setName(e.target.value) } />
        </form>
    )
}
export default Form;
