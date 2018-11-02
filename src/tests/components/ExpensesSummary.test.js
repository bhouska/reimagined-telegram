import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should render correctly with 1 expense', () => {
    const expenseTotal = selectExpensesTotal([expenses[0]]);
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} expenseCount={1} expenseTotal={expenseTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly with multiple expenses', () => {
    const expenseTotal = selectExpensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expenses={expenses} expenseCount={expenses.length} expenseTotal={expenseTotal} />);
    expect(wrapper).toMatchSnapshot();
});