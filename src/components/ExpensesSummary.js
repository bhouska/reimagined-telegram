import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => (
    <div>
        <h1>
            Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling 
            {numeral(expenseTotal/100).format('$0,0.00')}
        </h1>
    </div>
);

const mapStateToProps = (state) => ({
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expenseTotal: selectExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);