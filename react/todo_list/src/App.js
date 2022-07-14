import { useState, useEffect } from 'react';
import Input from './components/Input';
import List from './components/List';

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onAddItem = item => {
    setTodoList( [...todoList, { content: item, completed: false } ] );
  }
  const onChangeComplete = content => {
    const newTodoList = [...todoList];
    const curItem = newTodoList.find(item => item.content === content);
    curItem.completed = !curItem.completed;
    setTodoList(newTodoList);
  }
  const onDeleteItem = content => {
    setTodoList(todoList.filter(item => item.content !== content));
  }
  return (
    <>
      <Input onAddItem={ onAddItem }/>
      <List onChangeComplete={ onChangeComplete } 
        onDeleteItem={ onDeleteItem } todoList={ todoList }/>
    </>
  )
}
export default App;
