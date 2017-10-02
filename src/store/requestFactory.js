
import { ENV } from './../env';


import {
    APP_INIT
} from './../actions/actionTypes';

export default function requestFactory ({ getState }) {

    return (next) => (action) => {

        const state = getState();
        let request = null;
        let method = 'post';
        let data = {};

        switch (action.type) {

            case APP_INIT:

                request = {
                };

                return request;

            default:

                break;
        }
        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action);
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    };
}
