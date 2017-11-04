

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';


const store = configureStore();

// store.dispatch( addExpense( { description: 'Water bill', amount: 4500, createdAt: 100} ) );
// store.dispatch( addExpense( { description: 'gas Bill', createdAt: 1000} ) );
// store.dispatch( addExpense( { description: 'Rent', amount: 109500} ) );

// store.dispatch( setTextFilter('gas') );

// setTimeout( () => {
//     store.dispatch( setTextFilter('bill') );
// },2000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
// console.log( visibleExpenses );

//console.log( store.getState() );

// store.subscribe( () => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
//     console.log( visibleExpenses );
// });

// const expenseOne = store.dispatch( addExpense( { description: 'Water bill', amount: 100, createdAt: -1000} ) );
// const expenseTwo = store.dispatch( addExpense( { description: 'gas Bill', amount: 300, createdAt: 1000} ) );
//store.dispatch( setTextFilter('Gas') );

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));
