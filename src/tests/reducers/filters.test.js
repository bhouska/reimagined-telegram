import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const testDate = moment(0);

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'action text';
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER', 
        text 
    });
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: testDate
    });
    expect(state.startDate).toEqual(testDate);
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: testDate
    });
    expect(state.endDate).toEqual(testDate);
});