import {
    APP_INIT
} from './../actions/actionTypes';

import { INITIAL_PLAYER_STATE } from './initialStates';

export default function (state = INITIAL_PLAYER_STATE, action) {

    switch (action.type) {

        case APP_INIT: {

            return state;
        }

        default: {

            return state;
        }
    }
}
