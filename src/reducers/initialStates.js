/* eslint-disable no-unused-vars */
export const courseData = {
    id: undefined,
    name: '',
    holes: [],
    slope: undefined
};

export const clubData = {
    name: '',
    type: undefined
};

export const playerData = {
    firstName: '',
    lastName: '',
    playingHandicap: 0,
    handicap: 23
};

export const holeData = {
    holeNr: 0,
    si: 1,
    par: 3,
    length: undefined
};

const coursesData = [{ ...courseData, name: 'course name 1', id: '1' },
{ ...courseData, name: 'course name 2', id: '2' }];

const bagData = {
    clubs: []
};

const gameHolesData = [{
    id: 0,
    name: 'hole 1',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 2',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 3',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 4',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 5',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 6',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 7',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 8',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 9',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 10',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 11',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 12',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 13',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 14',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 15',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 16',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 17',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
},
{
    id: 0,
    name: 'hole 18',
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: []
}];

export const gameData = {
    id: undefined,
    gameName: '',
    gameDateTime: undefined,
    bag: undefined,
    player: {
        name: undefined,
        exactHandicap: undefined
    },
    marker: undefined,
    course: undefined
};

const gamesData = [
    { 
        'id': 'cji8x4oag00033c5vr0taeocx',
        'gameName': 'game name 1',
        'gameDateTime': '2018-06-10T04:22',
        'bag': { 'clubs': [] },
        'player': { 'firstName': '', 'lastName': '', 'playingHandicap': 0, 'handicap': 23, 'playerPlayingHandicap': 0 },
        'course': {
            'id': 'cji8x4q0300043c5vt0kqpxqn',
            'name': '',
            'holes': [...gameHolesData]
        }
    },
    {
        ...gameData,
        gameName: 'game name 2'
    },
    {
        ...gameData,
        gameName: 'game name 3'
    }];

const clubsData = [/*{
    name: 'puttter',
    brand: 'ping',
    id: 1
},
{
    name: 'Lob wedge',
    brand: 'ping',
    id: 2
},
{
    name: 'Sand wedge',
    brand: 'ping',
    id: 3
},
{
    name: 'Pitching wedge',
    brand: 'ping',
    id: 4
},
{
    name: '9 iron',
    brand: 'ping',
    id: 5
},
{
    name: '8 iron',
    brand: 'ping',
    id: 6
},
{
    name: '7 iron',
    brand: 'ping',
    id: 7
},
{
    name: '6 iron',
    brand: 'ping',
    id: 8
},
{
    name: '5 iron',
    brand: 'ping',
    id: 9
},
{
    name: '4 iron',
    brand: 'ping',
    id: 10
},
{
    name: '5 wood',
    brand: 'ping',
    id: 11
},
{
    name: 'rescue wood',
    brand: 'ping',
    id: 12
},
{
    name: '3 wood',
    brand: 'ping',
    id: 13
},
{
    name: 'Driver',
    brand: 'ping',
    id: 14
},
{
    name: 'Driver',
    brand: 'callaway',
    id: 15
},
{
    name: 'Driver',
    brand: 'mizuno',
    id: 16
},
{
    name: 'Driver',
    brand: 'ploan',
    id: 17
}*/];

const appData = {
    currentGameId: undefined,
    currentHoleId: undefined
};
/* eslint-enable no-unused-vars */

const markersData = [];//{ ...playerData, firstName: 'marker first name 1' }

export const INITIAL_APP_STATE = appData;
export const INITIAL_CLUBS_STATE = clubsData;
export const INITIAL_GAME_HOLES_STATE = gameHolesData;
export const INITIAL_GAMES_STATE = gamesData;
export const INITIAL_COURSES_STATE = coursesData;
export const INITIAL_BAG_STATE = bagData;
export const INITIAL_PLAYER_STATE = playerData;
export const INITIAL_MARKERS_STATE = markersData;
