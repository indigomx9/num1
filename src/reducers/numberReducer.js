import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/actionTypes';

let initialState = {
    number: 0
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        case ADD:
            return {
                ...state,
                number: state.number + action.payload
            }
        case SUBTRACT:
            return {
                ...state,
                number: state.number - action.payload
            }
    }
    return state
};

export default numberReducer;

