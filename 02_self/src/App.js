import React, {useState} from 'react';

import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";

import './App.css';

const DATA = [
    {id: 1, text: 'Buy cat'},
    {id: 2, text: 'Love cat'},
    {id: 3, text: '???'},
    {id: 4, text: 'Profit'},
]

function App() {
    const [todoData, setTodoData] = useState(DATA)

    const addTodoHandler = todo => {
        setTodoData((prevTodoData) => {
            return [...prevTodoData, todo];
        })
    }
    const deleteTodoHandler = id => {
        setTodoData((prevTodoData) => {
            return prevTodoData.filter(todo => todo.id !== id);
        })
    }

    return (
        <div className="app">
            <TodoAdd onAddTodo={addTodoHandler}/>
            <TodoList
                data={todoData}
                onDeleteTodo={deleteTodoHandler}
            />
        </div>
    );
}

export default App;
