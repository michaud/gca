import {
    INIT_APP
} from './../actions/actionTypes';

import { INITIAL_GAME_HOLES_STATE } from './initialStates';

export default function (state = INITIAL_GAME_HOLES_STATE, action) {

    switch (action.type) {

        case INIT_APP:

            return state;

        default:
        
            return state;
    }
}
