const Box = props => {
    const boxStyle = {
        display: "inline-block",
        width: `${props.width}px`,
        height: `${props.width}px`,
        backgroundColor: props.backgroundColor,
        margin: "10px"
    }
    return <div style = { boxStyle }></div>
}

export default Box;
