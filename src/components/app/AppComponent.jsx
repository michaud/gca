import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import 'scss/_style.scss';

import StrokesMap from './../map/StrokesMap';

injectTapEventPlugin();

class AppComponent extends Component {

    render () {

        const { clubs, gameHoles, strokeAdded } = this.props;

        return <div>
            <div><button className="btn--action wide">Course name</button></div>
            <div><button className="btn--action wide">game</button></div>
            <div>
                <div className="game-nav">
                    <button className="game-nav__btn">&lt;</button>
                    <button className="game-nav__hole">
                        <div>hole 1</div>
                        <div> strokes: 2, points: 1</div>
                    </button>
                    <button className="game-nav__btn">&gt;</button>
                </div>
                <ol className="plain-list hole-list" style={{ display: 'none' }}>
                    { gameHoles.map((hole, idx) => <li key={ idx }><button className="btn--action">{ hole.name }</button></li>) }
                </ol>
                <ol className="plain-list club-list">
                    { clubs.map((club, idx) => <li key={ idx }><button className="btn--action wide" onClick={ strokeAdded }>{ club.name }</button></li>) }
                </ol>
                <div><button className="btn--action wide">Holed</button></div>
            </div>
            <StrokesMap isMarkerShown strokes={ gameHoles[0].strokes }/>
            <div>
                <div>score</div>
                <ol>
                    { gameHoles[0].strokes.map((stroke, idx) => {

                        return <li key={ idx }>{ stroke.longitude} { stroke.latitude }</li>
                    })}
                </ol>
            </div>
        </div>;
    }
}

export default AppComponent;
