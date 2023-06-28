import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [formToggle, setFormToggle] = useState(false);

    const saveExpenseHandler = ( enteredExpenseData ) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const showFormHandler = () => {
        setFormToggle(true);
    }

    const hideFormHandler = () => {
        setFormToggle(false);
    }

    let expenseForm = <button onClick={showFormHandler}>Add New Expenses</button>;

    if (formToggle) {
        expenseForm = <ExpenseForm 
        onSaveExpenseData={ saveExpenseHandler }
        onCancel = {hideFormHandler}
        />
    }
    return (
        <div className='new-expense'>            
            {expenseForm}
        </div>
    );
};

export default NewExpense;