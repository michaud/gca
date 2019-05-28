import cuid from 'cuid';

import {
    APP_INIT,
    ADD_COURSE
} from 'actions/actionTypes';

import { INITIAL_COURSES_STATE } from './initialStates';

export default function (state = INITIAL_COURSES_STATE, action) {

    switch (action.type) {

        case APP_INIT: {

            return state;
        }

        case ADD_COURSE: {

            const { course } = action;

            return [
                ...state,
                { ...course, id: cuid() }
            ];
        }

        default: {

            return state;
        }
    }
}
