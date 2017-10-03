import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import 'scss/_style.scss';

import StrokesMap from './../map/StrokesMap';

injectTapEventPlugin();

class AppComponent extends Component {

    render () {

        const { clubs, gameHoles, strokeAdded } = this.props;

        return <div>
            <div>game
            <div>Course name</div>
            </div>
            <div className="game-nav">
                <div className="game-nav__btn">prev</div>
                <div className="game-nav__hole">hole</div>
                <div className="game-nav__btn">next</div>
            </div>
            <ol className="club-list">
                { clubs.map((club, idx) => <li key={ idx }><button onClick={ strokeAdded }>{ club.name }</button></li>) }
            </ol>
            <div>Holed</div>
            <div>
                <div>score</div>
                <ol>
                    { gameHoles[0].strokes.map((stroke, idx) => {

                        return <li key={ idx }>{ stroke.longitude} { stroke.latitude }</li>
                    })}
                </ol>
            </div>
            <StrokesMap isMarkerShown />
        </div>;
    }
}

export default AppComponent;
