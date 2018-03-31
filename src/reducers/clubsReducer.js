import * as type from './../actions/actionTypes';

import cuid from 'cuid';
import { INITIAL_CLUBS_STATE } from './initialStates';

export default function (state = INITIAL_CLUBS_STATE, action) {

    switch (action.type) {

        case type.ADD_CLUB: {

            const { club } = action;
            const newClub = { ...club, id: cuid() };

            return [
                ...state,
                newClub
            ];
        }

        case type.ADD_CLUB_TO_BAG: {

            const { club } = action;

            return state.map((targetClub) => club.id === targetClub.id ? { ...targetClub, inBag: true } : targetClub);
        }

        case type.REMOVE_CLUB_FROM_BAG: {

            const { club } = action;

            return state.map((targetClub) => club.id === targetClub.id ? { ...targetClub, inBag: false } : targetClub);
        }

        default: {
            return state;
        }
    }
}
