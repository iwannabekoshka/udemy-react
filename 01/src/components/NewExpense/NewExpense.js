import React, {useState} from 'react';

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false);

    const addExpenseHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }

        props.onAddExpense(newExpense);
    }
    const switchFormActiveHandler = () => {
        setFormActive(prevFromActive => {
            return !prevFromActive;
        })
    }

    let content = <button onClick={switchFormActiveHandler}>Add new expense</button>;
    if (formActive) {
        content =
            <ExpenseForm
                onAddExpense={addExpenseHandler}
                onSwitchFormActive={switchFormActiveHandler}
            />
    };

    return (
        <div className="new-expense">
            {content}
        </div>
    )
}

export default NewExpense;