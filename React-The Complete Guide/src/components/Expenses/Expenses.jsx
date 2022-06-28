import React from "react";
import Card from '../UI/Card/Card.jsx';
import ExpenseItem from "./ExpenseItem.jsx";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem
                title={ props.items[0].title }
                amount={ props.items[0].amount }
                date={ props.items[0].date }
            />
            <ExpenseItem
                title={ props.items[1].title }
                amount={ props.items[1].amount }
                date={ props.items[1].date }
            />{ " " }
            <ExpenseItem
                title={ props.items[2].title }
                amount={ props.items[2].amount }
                date={ props.items[2].date }
            />
        </Card>
    );
}
export default Expenses;

