import { combineReducers } from 'redux';

import app from './appReducer';
import clubs from './clubsReducer';
import gameHoles from './gameHolesReducer';
import games from './gamesReducer';
import bag from './bagReducer';

const rootReducer = combineReducers({
    app,
    clubs,
    gameHoles,
    games,
    bag
});

export default rootReducer;
