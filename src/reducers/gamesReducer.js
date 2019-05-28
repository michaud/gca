import {
    APP_INIT, START_GAME
} from './../actions/actionTypes';

import { INITIAL_GAMES_STATE } from './initialStates';

export default function (state = INITIAL_GAMES_STATE, action) {

    switch (action.type) {

        case APP_INIT: {

            return state;
        }

        case START_GAME: {

            const { gameData } = action;

            return [
                { ...gameData },
                ...state
            ];
        }

        default: {

            return state;
        }
    }
}
