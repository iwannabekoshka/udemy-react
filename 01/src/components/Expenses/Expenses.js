import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
    const [year, setYear] = useState('2021');

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    });

    const changeYearHandler = (year) => {
        setYear(year);

    };
    const removeExpenseHandler = (id) => {
        props.onRemoveExpense(id)
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                year={year}
                onChangeYear={changeYearHandler}
            />
            {filteredExpenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onRemoveExpense={removeExpenseHandler}
                />
            )}
        </Card>
    )
}

export default Expenses;