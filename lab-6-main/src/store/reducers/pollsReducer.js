import {ADD_POLL, CLEAR_POLLS, DELETE_POLL} from "../actions/actionTypes";
import initialState from "../initialState";

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POLL: return {
            ...state,
            myPolls: [...state.myPolls, action.value]
        }
        case CLEAR_POLLS: return {
            ...state,
            myPolls: []
        }
        case DELETE_POLL: return {
            ...state,
            myPolls: state.myPolls.filter(x => x.id !== action.value)
        }
        default: return state;
    }
}

export default reducer;