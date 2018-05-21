import { START_GAME } from 'actions/actionTypes';

export const startGame = (gameData) => ({
    type: START_GAME,
    gameData
});
