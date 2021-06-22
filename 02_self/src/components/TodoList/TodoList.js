import React from 'react';

import TodoItem from "../TodoItem/TodoItem";

import './TodoList.css';

const TodoList = props => {
    const deleteTodoHandler = id => {
        props.onDeleteTodo(id);
    }

    let content = props.data.map(item =>
        <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDeleteTodo={deleteTodoHandler}
        />
    );
    if (props.data.length === 0) content = <p>No todos found :(</p>;

    return (
        <ul className='todo-list'>
            {content}
        </ul>
    )
}

export default TodoList;