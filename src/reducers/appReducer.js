import {
    APP_INIT
} from './../actions/actionTypes';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case APP_INIT: {

            return state;
        }

        default: {

            return state;
        }
    }
}
