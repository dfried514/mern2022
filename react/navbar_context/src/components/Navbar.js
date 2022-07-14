import React, { useContext } from 'react';
import { WrapperContext } from '../contexts/Wrapper';

const Navbar = () => {
    const [name] = useContext(WrapperContext);

    return (
        <div>
            <h1>Welcome, { name }</h1>
        </div>
    )
}
export default Navbar;
