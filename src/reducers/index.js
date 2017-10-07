import { combineReducers } from 'redux';

import app from './appReducer';
import clubs from './clubsReducer';
import gameHoles from './gameHolesReducer';
import games from './gamesReducer';
import bag from './bagReducer';
import courses from './coursesReducer';

const rootReducer = combineReducers({
    app,
    courses,
    clubs,
    gameHoles,
    games,
    bag
});

export default rootReducer;
