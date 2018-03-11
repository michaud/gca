import React from 'react';

const GameNavigatorComponent = ({ games }) => {

    return <div><button className="btn--action panel--edit__btn wide">Game</button>
        <div className="panel--edit collapsed">
            <div className="panel--edit__content-container hidden">
                <div className="panel--edit__content">
                    <ol>
                        { games.map((game, idx) => <li key={ idx }>{ game.name }</li>) }
                    </ol>
                </div>
                <div className="panel--edit">
                    <div className="panel--edit__content-container">
                        <div className="panel--edit__content">
                            <button className="btn--action panel--edit__btn wide">new game</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default GameNavigatorComponent;
