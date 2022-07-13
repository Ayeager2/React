import React from "react";
import Card from '../UI/Card/Card.jsx';
import ExpenseDate from "./ExpenseDate.jsx";
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className='expense-item' >
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
