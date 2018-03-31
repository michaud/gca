import React from 'react';

const HoleNavigatorComponent = ({ holes }) => {
    return holes.length > 0 ? <div>
        <div className="game-nav">
            <button className="btn--action game-nav__btn">&lt;</button>
            <button className="btn--action game-nav__hole">
                <div>hole 1</div>
                <div> strokes: 2, points: 1</div>
            </button>
            <button className="btn--action game-nav__btn">&gt;</button>
        </div>
        <ol className="plain-list hole-list" style={{ display: 'none' }}>
            { holes.map((hole, idx) => <li key={ idx }><button className="btn--action">{ hole.name }</button></li>) }
        </ol>
    </div>
    : null;
};

export default HoleNavigatorComponent;
