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

export const startingGame = (newGameData) => (dispatch, getState) => {

    let game;
    let course;
    let marker = newGameData.selectedMarker;

    const { courses, markers, player } = getState();

    if(newGameData.selectedCourse === -1) {

        course = {
            ...courseData,
            id: cuid()
        };

    } else {

        course = { ...courses.find((targetCourse) => newGameData.selectedCourse === targetCourse.id) };
    }

    if(marker !== -1) {

        marker = {
            ...markers.find((targetMarker) => newGameData.selectedMarker === targetMarker.id),
            markerPlayingHandicap: newGameData.markerPlayingHandicap
        };

    }

    game = {
        ...gameData,
        ...newGameData,
        id: cuid(),
        course,
        marker,
        player: {
            ...player,
            playerPlayingHandicap: newGameData.playerPlayingHandicap
        }
    };
    console.log('game: ', game);
    dispatch(startGame(game));
};
