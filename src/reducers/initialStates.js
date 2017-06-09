import * as mockData from './mockData';

export const APP_REDUCER_INIT = {
    curCourseIndex: 0,
    curGameIndex: 0
};

export const CLUB_REDUCER_INIT = [...mockData.clubs];

export const COURSE_REDUCER_INIT = [...mockData.courses];

export const PLAYER_REDUCER_INIT = {
    "name": "",
    "exactHandicap": 0,
    "clubs": [...mockData.clubs],
    "bag": {
        "clubs": [...mockData.clubs]
    }
};

export const GAME_REDUCER_INIT = [...mockData.games]