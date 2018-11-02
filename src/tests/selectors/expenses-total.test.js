import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const expensesTotal = selectExpensesTotal([]);
    expect(expensesTotal).toBe(0);
});

test('should correctly add up a single expense', () => {
    const singleExpense = [expenses[0]];
    const expensesTotal = selectExpensesTotal(singleExpense);
    expect(expensesTotal).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const expensesTotal = selectExpensesTotal(expenses);
    expect(expensesTotal).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});