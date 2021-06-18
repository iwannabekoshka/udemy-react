import React, {useState} from 'react';

import './TodoAdd.css';

const TodoAdd = props => {
    const [todoText, setTodoText] = useState('');

    const changeTodoHandler = event => {
        setTodoText(event.target.value);
    }

    const addTodoHandler = event => {
        event.preventDefault();

        const todo = {
            id: Math.random(),
            text: todoText
        }

        props.onAddTodo(todo);
        setTodoText('');
    }

    return (
        <form className={'todo-add'} onSubmit={addTodoHandler}>
            <label>What to do</label>
            <input
                type="text"
                value={todoText}
                onChange={changeTodoHandler}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoAdd;