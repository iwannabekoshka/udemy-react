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

    return (
        <div className="new-expense">
            {!formActive &&
                <button onClick={switchFormActiveHandler}>Add new expense</button>
            }
            {formActive &&
                <ExpenseForm
                    onAddExpense={addExpenseHandler}
                    onSwitchFormActive={switchFormActiveHandler}
                />
            }
        </div>
    )
}

export default NewExpense;