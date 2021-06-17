import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [year, setYear] = useState('2021');

    const changeYearHandler = (year) => {
        setYear(year);

    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                year={year}
                onChangeYear={changeYearHandler}
            />

            <ExpensesList
                expenses={filteredExpenses}
            />
        </Card>
    )
}

export default Expenses;