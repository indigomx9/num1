import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';

let initalState = {
    results: []
};

const resultReducer = (state = initalState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,  // Concat returns a new array.
                results: state.results.concat({
                    id: new Date(),
                    value: action.payload
                })
            }
        case DELETE_RESULT:
            // Filter returns a new array.
            const updatedArray = state.results.filter(
                (result => result.id !== action.payload));
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default resultReducer;

