import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.jsx";
import Card from '../UI/Card/Card.jsx';
import ExpensesList from "./ExpensesList.jsx"
import './Expenses.css';
import ExpensesChart from "./ExpensesChart.jsx";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filterYearItems = props.items.filter(x => {
        return x.date.getFullYear().toString() === filteredYear
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={ filteredYear }
                    onFilterChange={ filterChangeHandler }
                />
                <ExpensesChart expenses={ filterYearItems } />
                <ExpensesList items={ filterYearItems } />
            </Card>
        </div>
    );
}
export default Expenses;

