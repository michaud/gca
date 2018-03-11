const coursesData = [{
    name: 'coursename',
    holes: [],
    slope: undefined
}];

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

const gamesData = [{
    name: 'gamename',
    gameDate: undefined,
    bag: bagData,
    playingHandicap: undefined,
    handicap: undefined,
    players: {
        player: {
            name: undefined,
            exactHandicap: undefined
        },
        marker: {
            name: undefined,
            exactHandicap: undefined
        }
    },
    course: {
        name: 'coursename',
        holes: [],
        slope: undefined
    }
}];

const clubData = [{
    name: 'puttter',
    brand: 'ping'
},
{
    name: 'Lob wedge',
    brand: 'ping'
},
{
    name: 'Sand wedge',
    brand: 'ping'
},
{
    name: 'Pitching wedge',
    brand: 'ping'
},
{
    name: '9 iron',
    brand: 'ping'
},
{
    name: '8 iron',
    brand: 'ping'
},
{
    name: '7 iron',
    brand: 'ping'
},
{
    name: '6 iron',
    brand: 'ping'
},
{
    name: '5 iron',
    brand: 'ping'
},
{
    name: '4 iron',
    brand: 'ping'
},
{
    name: '5 wood',
    brand: 'ping'
},
{
    name: 'rescue wood',
    brand: 'ping'
},
{
    name: '3 wood',
    brand: 'ping'
},
{
    name: 'Driver',
    brand: 'ping'
}];

const appData = {
    currentGameId: undefined,
    currentHoleId: undefined
};

export const INITIAL_APP_STATE = appData;
export const INITIAL_CLUBS_STATE = clubData;
export const INITIAL_GAME_HOLES_STATE = gameHolesData;
export const INITIAL_GAMES_STATE = gamesData;
export const INITIAL_COURSES_STATE = coursesData;
export const INITIAL_BAG_STATE = bagData;
