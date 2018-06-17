import cuid from 'cuid';

import { saveStrokeLocation } from 'actions/geoActions';

import { startGame } from 'actions/gameActions';
import {
    gameData,
    courseData
} from 'reducers/initialStates';

export const strokeAdded = (club) => (dispatch, getState) => {// eslint-disable-line no-unused-vars

    dispatch(saveStrokeLocation(club));
};

export const startingGame = ({
    id,
    gameDateTime,
    gameName,
    markerPlayingHandicap,
    playerPlayingHandicap,
    selectedCourse,
    selectedMarker
}) => (dispatch, getState) => {

    const { courses, markers, player, bag } = getState();

    let course, marker;
    let game = {
        ...gameData
    };

    if(selectedCourse === -1) {

        course = {
            ...courseData,
            id: cuid()
        };

    } else {

        course = { ...courses.find((targetCourse) => selectedCourse === targetCourse.id) };
    }

    if(selectedMarker !== -1) {

        marker = {
            ...markers.find((targetMarker) => selectedMarker === targetMarker.id),
            markerPlayingHandicap
        };
    }


    game = {
        ...gameData,
        id,
        gameName,
        gameDateTime,
        course,
        marker,
        player: {
            ...player,
            playerPlayingHandicap
        },
        bag: { ...bag }
    };

    dispatch(startGame(game));
};
