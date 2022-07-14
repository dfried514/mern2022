import styles from './Boxes.module.css';
import Box from './Box';

const Boxes = props => {
    return (
        <div className = { styles.boxes }>
            {props.boxDimentions.map((box, i) => (
                <Box key = {i} width={box.width} backgroundColor={box.color} /> 
            ))}
        </div>
    );
};

export default Boxes;
