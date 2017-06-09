import { APP_REDUCER_INIT } from './initialStates';

export default function appReducer(state = APP_REDUCER_INIT, action) {

    switch (action.type) {

        default:

            return state;            
    }
}