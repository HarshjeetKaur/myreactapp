const initialState = {
    counter: 0
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'INCREMENT':
            state = {...state, counter: state.counter + 1};
            break;
        case 'DECREMENT':
            state = {...state, counter: state.counter - 1};
            break;

        default:
            state = state;
    }
    return state;
};

export default reducer;