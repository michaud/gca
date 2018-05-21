import * as type from './../actions/actionTypes';

import { INITIAL_BAG_STATE } from './initialStates';

export default function (state = INITIAL_BAG_STATE, action) {

    switch (action.type) {

        case type.INIT_APP: {

            return state;
        }

        case type.ADD_CLUB_TO_BAG: {

            const { club } = action;

            const newState = {
                ...state,
                clubs: [
                    ...state.clubs,
                    club.id
                ]
            };

            return newState;
        }

        case type.REMOVE_CLUB_FROM_BAG: {

            const { club } = action;

            return {
                ...state,
                clubs: state.clubs.reduce((acc, clubId) => {

                    if(clubId !== club.id) {
                        acc.push(clubId);
                    }

                    return acc;

                }, [])
            };
        }

        default: {

            return state;
        }
    }
}
