
import { createStore } from 'redux';

//action generator

// const add = ({ a,b }, c) => {
//     return a + b + c;
// }
// console.log(add( {a:1, b:12 }, 100 ))

// const incrementCount = ( payload = {} ) => ( { 
//     type:'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// } );


// SIPLIFY the above
const incrementCount = ( { incrementBy = 1 } = {} ) => ( { 
    type:'INCREMENT',
    incrementBy
} );

const decrementCount = ( {decrementBy = 1} = {} ) => ( { 
    type: 'DECREMENT',
    decrementBy
} );

const resetCount = () => ( { 
    type: 'RESET',
} );

const setCount = ( {count} ) => ( { 
    type: 'SET',
    count
} );

// REDUCERS

const countReducer = (state = { count:0 }, action ) => {
    
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
           count: action.count
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
        return state;
    };
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch( incrementCount( { incrementBy: 5 } ) );

store.dispatch( incrementCount() );

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch( resetCount() );

store.dispatch( decrementCount() );

store.dispatch( decrementCount( { decrementBy: 10 } ) );

// store.dispatch({
//     type: 'SET',
//     count: 101
// }); 

store.dispatch( setCount( { count: 10000 } ) );