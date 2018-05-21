import {
    INIT_APP,
    SAVE_STROKE_LOCATION_DATA
} from './../actions/actionTypes';

import { INITIAL_GAME_HOLES_STATE } from './initialStates';

export default function (state = INITIAL_GAME_HOLES_STATE, action) {

    switch (action.type) {

        case INIT_APP: {

            return state;
        }

        case SAVE_STROKE_LOCATION_DATA: {

            const newState = state.map((item, index) => {
                if (index !== 0) {
                    return item;
                } else {
                    let newArray = item.strokes.slice();
                    const newStroke = {
                        accuracy: action.geoData.accuracy,
                        altitude: action.geoData,
                        altitudeAccuracy: action.geoData,
                        heading: action.geoData.altitudeAccuracy,
                        latitude: action.geoData.latitude,
                        longitude: action.geoData.longitude,
                        speed: action.geoData.speed,
                        name: 'plop'
                    };

                    return {
                        ...item,
                        strokes: [...newArray,
                            {...newStroke}]
                    };
                }
            });

            return [...newState];
        }

        default: {

            return state;
        }
    }
}
