import ListItem from './ListItem';

const List = props => {
    return (
        <ul>
            { props.todoList.map( (item, i) =>
                <ListItem key={i}
                    onChangeComplete={ props.onChangeComplete }
                    onDeleteItem={ props.onDeleteItem }
                    content={item.content} completed={item.completed} />
            )}
        </ul>
    )
}
export default List;
