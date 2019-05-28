import cuid from 'cuid';

import {
    APP_INIT, ADD_MARKER
} from './../actions/actionTypes';

import { INITIAL_MARKERS_STATE } from './initialStates';

export default function (state = INITIAL_MARKERS_STATE, action) {

    switch (action.type) {

        case APP_INIT: {

            return state;
        }

        case ADD_MARKER: {

            const { marker } = action;

            return [
                ...state,
                { ...marker, id: cuid() }
            ];
        }
        default: {

            return state;
        }
    }
}
