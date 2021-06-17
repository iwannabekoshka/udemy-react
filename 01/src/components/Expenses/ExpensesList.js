import React from 'react';

import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if (props.expenses.length === 0) return  <p>No expenses found.</p>;

    return (
        <ul className='expenses-list'>
        {props.expenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )}
        </ul>
    )
}

export default ExpensesList;