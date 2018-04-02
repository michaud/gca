import {
    INIT_APP, ADD_MARKER
} from './../actions/actionTypes';

import { INITIAL_MARKERS_STATE } from './initialStates';

export default function (state = INITIAL_MARKERS_STATE, action) {

    switch (action.type) {

        case INIT_APP: {

            return state;
        }

        case ADD_MARKER: {
            const { marker } = action;

            return [...state, marker ];
        }
        default: {

            return state;
        }
    }
}
