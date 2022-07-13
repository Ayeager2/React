import React,{useState} from "react";
import ExpenseFrom from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setAddingExpense(false)
    }

    const [addingExpense, setAddingExpense] = useState(false)
    const startAddingExpensesHandler = () => {
        setAddingExpense(true);
    }
    const stopAddingExpensesHandler = () => {
        setAddingExpense(false)
    }
    return (
        <div className="new-expense">
            {!addingExpense && 
            <button onClick={startAddingExpensesHandler}>Add New Expense</button>
            }{addingExpense && 
                
            <ExpenseFrom onSaveExpenseData={ onSaveExpenseDataHandler } onCancel={stopAddingExpensesHandler}/>
            }
        </div>
    )
};
export default NewExpense;