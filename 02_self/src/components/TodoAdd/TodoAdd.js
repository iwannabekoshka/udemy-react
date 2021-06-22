import React, {useState, useRef} from 'react';

import './TodoAdd.css';

const TodoAdd = props => {
    const [todoText, setTodoText] = useState('');
    const [focusActive, setFocusActive] = useState(false);
    const [inputUnderline, setInputUnderline] = useState('');

    const descRef = useRef();

    const changeTodoHandler = event => {
        setTodoText(event.target.value);
    }
    const addTodoHandler = event => {
        event.preventDefault();
        if (todoText.length === 0) return;

        const todo = {
            id: Math.random(),
            text: todoText
        }

        props.onAddTodo(todo);
        setTodoText('');

        descRef.current.blur();
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
                    ref={descRef}
                    placeholder="Todo todo, of course"
                />
            </div>

            <button type="submit">Add</button>
        </form>
    )
}

export default TodoAdd;