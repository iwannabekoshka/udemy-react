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

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeYear={changeYearHandler} year={year}/>
            {props.expenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </Card>
    )
}

export default Expenses;