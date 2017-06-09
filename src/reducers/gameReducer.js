import { GAME_REDUCER_INIT } from './initialStates';
import { NEXT_HOLE, PREV_HOLE, SELECT_HOLE } from './../types/actionTypes';

export default function gameReducer(state = GAME_REDUCER_INIT, action) {

    switch (action.type) {

        case NEXT_HOLE:

            return state.map((game, index) => {
                if(index === action.curGameIndex) {
                    
                    const newHoleIndex = game.curHole + 1 < game.holeCount ? game.curHole + 1 : game.curHole;
                    const newGame = {
                        ...game,
                        curHole: newHoleIndex
                    } 

                    return newGame;
                }

                return game;
            });

        case PREV_HOLE:

            return state.map((game, index) => {
                if(index === action.curGameIndex) {
                    
                    const newHoleIndex = game.curHole - 1 > 0 ? game.curHole - 1 : 0;
                    const newGame = {
                        ...game,
                        curHole: newHoleIndex
                    } 

                    return newGame;
                }

                return game;
            });

        case SELECT_HOLE:

            return state.map((game, index) => {
                if(index === action.curGameIndex) {
                    
                    const newGame = {
                        ...game,
                        curHole: action.holeIndex
                    } 

                    return newGame;
                }

                return game;
            });

        default:

            return state;            
    }
}