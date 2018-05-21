import { combineReducers } from 'redux';

import app from './appReducer';
import clubs from './clubsReducer';
import gameHoles from './gameHolesReducer';
import games from './gamesReducer';
import bag from './bagReducer';
import courses from './coursesReducer';
import player from './playerReducer';
import markers from './markersReducer';

const rootReducer = combineReducers({
    app,
    courses,
    clubs,
    gameHoles,
    games,
    bag,
    player,
    markers
});

export default rootReducer;
