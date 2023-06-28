import React, { useState} from 'react';
import './Expenses.css';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';

function Expenses(props) {
    const [filter, setEnteredFilter] = useState('2020');

    const expenseFilterHandler = (enteredFilter) => {
        setEnteredFilter(enteredFilter);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filter;
    })


    return (

        <Card className="expenses">
            <ExpensesFilter
                selected = {filter}
                onExpenseFilter = { expenseFilterHandler }
            />
            <ExpenseChart expenses={filteredExpenses}/>
            <h2>Let's Get Started</h2>
            <ExpensesList 
                items = {filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;