import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.jsx";
import Card from '../UI/Card/Card.jsx';
import ExpenseItem from "./ExpenseItem.jsx";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filterYearItems = props.items.filter(x => {
        return x.date.getFullYear() == filteredYear
    });

    let expensesContent = <p>No Expenses Found.</p>;

    if (filterYearItems.length > 0) {
        expensesContent = filterYearItems.map((expense) => (
            <ExpenseItem
                key={ expense.id }
                title={ expense.title }
                amount={ expense.amount }
                date={ expense.date }
            />
        ))
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={ filteredYear }
                    onFilterChange={ filterChangeHandler }
                />
                { expensesContent }
            </Card>
        </div>
    );
}
export default Expenses;

