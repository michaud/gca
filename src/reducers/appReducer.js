import {
    INIT_APP
} from './../actions/actionTypes';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case INIT_APP: {

            return state;
        }

        default: {

            return state;
        }
    }
}
