import React from 'react';

import TodoItem from "../TodoItem/TodoItem";

import './TodoList.css';

const TodoList = props => {
    const deleteTodoHandler = id => {
        props.onDeleteTodo(id);
    }

    return (
        <ul className='todo-list'>
            {props.data.map(item =>
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    onDeleteTodo={deleteTodoHandler}
                />
            )}
        </ul>
    )
}

export default TodoList;