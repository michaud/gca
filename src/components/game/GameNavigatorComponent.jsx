import React from 'react';

const GameNavigatorComponent = ({ games }) => {

    return <div><button className="btn--action wide">Game</button>
        <ol>
            { games.map((game, idx) => <li key={ idx }>{ game.name }</li>) }
        </ol>
        <button className="btn--action wide">new game</button>
    </div>;
};

export default GameNavigatorComponent;
