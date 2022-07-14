const ListItem = props => {
    const changeComplete = content => {
        props.onChangeComplete(content);
    }
    const deleteItem = content => {
        props.onDeleteItem(content);
    }
    return (
        <li>
            {
                props.completed
                ? (<span><strike>{ props.content }</strike></span>)
                : (<span>{ props.content }  </span>)
            }
            <form>
                <input type="checkbox" id={props.content} name="completed"
                    onChange={ (e) => changeComplete(e.target.id) } checked={ props.completed }/>
                <label htmlFor="completed">Completed</label>
                <input type="button" id={props.content} value="Delete" 
                    onClick={ (e) => deleteItem(e.target.id) } />
            </form>
        </li>
    )
}
export default ListItem;
