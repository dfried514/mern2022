import { useState } from  'react';
    
const Input = props => {
    const [boxColor, setBoxColor] = useState("");
    const [boxWidth, setBoxWidth] = useState("");

    const addBox = e => {
        e.preventDefault();
        props.onAddBox(boxColor, boxWidth);
        setBoxColor("");
        setBoxWidth("");
    }
    
    return(
        <form onSubmit={ addBox }>
            <div>
                <label>Box Color:  </label>
                <input type="text" value={ boxColor } onChange={ (e) => setBoxColor(e.target.value) } />
            </div>
            <br />
            <div>
                <label>Box Width and Height (in pixels):  </label>
                <input type="text" value={ boxWidth } onChange={ (e) => setBoxWidth(e.target.value) }/>
            </div>
            <br />
            <input type="submit" value="Add Box" />
        </form>
    );
};

export default Input;
