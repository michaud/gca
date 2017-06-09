import { combineReducers } from 'redux';

import app from './appReducer';
import player from './playerReducer';
import clubs from './clubReducer';
import courses from './courseReducer';
import games from './gameReducer';

const combinedReducers = combineReducers({
    app,
    player,
    clubs,
    courses,
    games
}); 

const rootReducer = combinedReducers;

export default rootReducer;