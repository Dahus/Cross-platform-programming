import {ADD_POLL, DELETE_POLL, CLEAR_POLLS} from "../actions/actionTypes";

export function actionAddPoll(value) {
    return {
        type: ADD_POLL,
        value: value
    };
}

export function actionRemovePoll(value) {
    return {
        type: DELETE_POLL,
        value: value
    };
}

export function actionClearPolls() {
    return {
        type: CLEAR_POLLS
    }
}