
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

export default expensesReducer;