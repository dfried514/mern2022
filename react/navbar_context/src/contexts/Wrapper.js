import React, { useState } from 'react';

export const WrapperContext = React.createContext();

export const Wrapper = props => {
    const [name, setName] = useState("");

    return (
        <WrapperContext.Provider value={[name, setName]}>
            {props.children}
        </WrapperContext.Provider>
    )
};
