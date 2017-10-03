const coursesData = {
    name: "coursename",
    holes: [],
    slope: undefined
};

const gameHolesData = [{
    id: 0,
    name: "hole 1",
    par: 4,
    strokeIndex: 9,
    teeLocation: undefined,
    holeLocation: undefined,
    strokes: [{
        longitude: 51.92703795906442,
        latitude: 4.482954 
    }]
}];

const gamesData = [{
    name: undefined,
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
        name: "coursename",
        holes: [],
        slope: undefined
    }
}];

const bagData = {
    clubs:clubData
};

const clubData = [{
    name: "puttter",
    brand: "ping"
},
{
    name: "Lob wedge",
    brand: "ping"
},
{
    name: "Sand wedge",
    brand: "ping"
},
{
    name: "Pitching wedge",
    brand: "ping"
},
{
    name: "9 iron",
    brand: "ping"
},
{
    name: "8 iron",
    brand: "ping"
},
{
    name: "7 iron",
    brand: "ping"
},
{
    name: "6 iron",
    brand: "ping"
},
{
    name: "5 iron",
    brand: "ping"
},
{
    name: "4 iron",
    brand: "ping"
},
{
    name: "5 wood",
    brand: "ping"
},
{
    name: "rescue wood",
    brand: "ping"
},
{
    name: "3 wood",
    brand: "ping"
},
{
    name: "Driver",
    brand: "ping"
}];

export const INITIAL_CLUBS_STATE = clubData;
export const INITIAL_GAME_HOLES_STATE = gameHolesData;
export const INITIAL_GAMES_STATE = gamesData;
export const INITIAL_COURSES_STATE = coursesData;
export const INITIAL_BAG_STATE = bagData;
