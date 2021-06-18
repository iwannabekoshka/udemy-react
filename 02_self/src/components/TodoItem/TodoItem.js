import React from 'react';

import './TodoItem.css';

const TodoItem = props => {
    const deleteTodoHandler = event => {
        props.onDeleteTodo(props.id);
    }

    return (
        <li onClick={deleteTodoHandler}>{props.text}</li>
    )
}

export default TodoItem;