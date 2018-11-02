import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        Viewing {props.expenseCount} {props.expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(props.expenseTotal/100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expenseTotal: selectExpensesTotal(state.expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);