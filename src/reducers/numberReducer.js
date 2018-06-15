import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/actionTypes';

let initialState = {
    counter: 0
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }
    return state
};

export default numberReducer;

