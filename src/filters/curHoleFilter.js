export const curHoleFilter = (state) => {

    const curHoleIndex = state.games[state.app.curGameIndex].curHole;
    return state.games[state.app.curGameIndex].course.holes[curHoleIndex];
};