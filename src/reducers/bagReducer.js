import {
    INIT_APP
} from './../actions/actionTypes';

import { INITIAL_BAG_STATE } from './initialStates';

export default function (state = INITIAL_BAG_STATE, action) {

    switch (action.type) {

        case INIT_APP: {

            return state;
        }

        default: {

            return state;
        }
    }
}
