import React from 'react';

const TodoItem = props => {
    const deleteTodoHandler = event => {
        props.onDeleteTodo(props.id);
    }

    return (
        <li onClick={deleteTodoHandler}>{props.text}</li>
    )
}

export default TodoItem;