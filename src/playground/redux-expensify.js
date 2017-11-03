
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE 

const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE EXPENSE

const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT EXPENSE 

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// SORT_BY_AMOUNT

const sortByAmount = ( ) => ({
    type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE

const sortByDate = ( ) => ({
    type: 'SORT_BY_DATE'
});

// SET_START_DATE 

const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE 

const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, //spread operator concat the arrays not modifying it like push
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ( {id} ) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates // update with new values
                    }
                } else {
                    return expense; //no change
                }
            });
        default:
            return state;
    }
}

// Filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text  
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount' 
            } 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'  
            } 
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate  
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate  
            }
        default:
            return state;
    }
};

// GET visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate} ) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes( text.toLowerCase() );

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};

// Store creation

const store = createStore( 
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    }) 
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
    console.log( visibleExpenses );
});

const expenseOne = store.dispatch( addExpense( { description: 'rent', amount: 100, createdAt: -1000} ) );
const expenseTwo = store.dispatch( addExpense( { description: 'coffee', amount: 300, createdAt: 1000} ) );

// store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ));


// store.dispatch( setTextFilter('Re') );
// store.dispatch( setTextFilter() );

 store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

//store.dispatch( setStartDate(-1000) );
// store.dispatch( setStartDate() );

 //store.dispatch( setEndDate(1000) );
// store.dispatch( setEndDate() );

const demoState = {
    expenses: [{
        id: 'sdsadsad',
        description: 'January rent',
        note: 'Final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
     }
}

// ...user OBJECT SPREAD OPERATOR -> requires babel plugin babel-plugin-transform-object-rest-spread in .babelrc file

// const user = {
//     name: 'Jan',
//     age: 24
// }

// console.log({
//     age: 34,
//     ...user,
//     location: 'Poznań'
// });