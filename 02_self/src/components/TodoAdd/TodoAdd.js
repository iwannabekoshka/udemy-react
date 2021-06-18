import React, {useState} from 'react';

import './TodoAdd.css';

const TodoAdd = props => {
    const [todoText, setTodoText] = useState('');
    const [focusActive, setFocusActive] = useState(false);
    const [inputUnderline, setInputUnderline] = useState('');

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
    const switchFocusHandler = event => {
        setFocusActive((prevFocusActive) => {return !prevFocusActive});
        setInputUnderline(!focusActive ? 'active' : '');
    }

    return (
        <form className={'todo-add'} onSubmit={addTodoHandler}>
            <label>What to do</label>
            <div className={inputUnderline + ' input-container'}>
                <input
                    type="text"
                    value={todoText}
                    onChange={changeTodoHandler}
                    onFocus={switchFocusHandler}
                    onBlur={switchFocusHandler}
                />
            </div>

            <button type="submit">Add</button>
        </form>
    )
}

export default TodoAdd;