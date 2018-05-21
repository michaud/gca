import {
    INIT_APP
} from './../actions/actionTypes';

import { INITIAL_GAMES_STATE } from './initialStates';

export default function (state = INITIAL_GAMES_STATE, action) {

    switch (action.type) {

        case INIT_APP: {

            return state;
        }

        default: {

            return state;
        }
    }
}
