import { NEXT_HOLE, PREV_HOLE, SELECT_HOLE } from './../types/actionTypes';

export const nextHole = () => {

    return (dispatch, getState) => {
        const state = getState();

        dispatch({ type: NEXT_HOLE, curGameIndex: state.app.curGameIndex });
    }
}

export const prevHole = () => {
    return (dispatch, getState) => {
        const state = getState();

        dispatch({ type: PREV_HOLE, curGameIndex: state.app.curGameIndex });
    }
}

export const selectHole = (holeIndex) => {

    return (dispatch, getState) => {

        const state = getState();

        dispatch({ type: SELECT_HOLE, holeIndex, curGameIndex: state.app.curGameIndex });
    }
}