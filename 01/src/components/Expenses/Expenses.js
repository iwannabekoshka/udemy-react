import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
    const [year, setYear] = useState('2021');

    const changeYearHandler = (year) => {
        setYear(year);
    }
    const removeExpenseHandler = (id) => {
        props.onRemoveExpense(id)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeYear={changeYearHandler} year={year}/>
            {props.expenses.map(expense =>
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