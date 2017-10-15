import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import AddCourseComponent from './AddCoureComponent';
import StrokesMap from './../map/StrokesMap';

injectTapEventPlugin();

class AppComponent extends Component {

    state = {
        path: [],
        mailData: 'mailto:michaud@venant.nl?body=',
        mailStrokes: 'mailto:michaud@venant.nl?body='
    }

    updatePath = (position) => {

        let path = [];

        if(this.state.path.length > 200) {
            path = this.state.path.slice(1, this.state.path.length - 1)
        } else {
            path = [...this.state.path];
        }

        const pathData = [...path, position.coords];
        const mailData = this.getGeoMail(pathData);
        const mailStrokes = this.getGeoStrokeMail(this.props.gameHoles[0].strokes);
        this.setState({
            path: pathData,
            mailData,
            mailStrokes
        })
    }

    watcherId = undefined;

    componentDidMount =() => {

        this.whatcherId = navigator.geolocation.watchPosition(this.updatePath)
    }

    getGeoMail = (data) => {
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: data  }) }`;
    }

    getGeoStrokeMail = (data) => {
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: this.props.gameHoles[0].strokes}) }`;
    }

    render() {

        const {
            courses,
            games,
            clubs,
            gameHoles,
            strokeAdded
        } = this.props;

        return <div>
            <button className="btn--action panel--edit__btn wide">Course name</button>
            <div className="panel--edit collapsed">
                <div className="panel--edit__content-container hidden">
                    <div className="panel--edit__content">
                        <ol>
                            { courses.map((course, idx) => <li key={ idx }>{ course.name }</li>) }
                        </ol>
                    </div>
                    <AddCourseComponent/>
                </div>
            </div>
            <button className="btn--action panel--edit__btn wide">Game</button>
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
            <div>
                <div className="game-nav">
                    <button className="btn--action game-nav__btn">&lt;</button>
                    <button className="btn--action game-nav__hole">
                        <div>hole 1</div>
                        <div> strokes: 2, points: 1</div>
                    </button>
                    <button className="btn--action game-nav__btn">&gt;</button>
                </div>
                <ol className="plain-list hole-list" style={{ display: 'none' }}>
                    { gameHoles.map((hole, idx) => <li key={ idx }><button className="btn--action">{ hole.name }</button></li>) }
                </ol>
                <ol className="plain-list club-list">
                    {clubs.map((club, idx) => <li key={ idx }><button className="btn--action wide" onClick={ strokeAdded }>{ club.name }</button></li>)}
                </ol>
                <div><button className="btn--action wide">Holed</button></div>
            </div>
            <StrokesMap isMarkerShown strokes={ gameHoles[0].strokes } />
            <StrokesMap isMarkerShown strokes={ this.state.path } />
            <div>
                <div>score</div>
                <ol>
                    { gameHoles[0].strokes.map((stroke, idx) => {

                        return <li key={ idx }>{ stroke.longitude } { stroke.latitude }</li>
                    }) }
                </ol>
            </div>
            <a href={ this.state.mailData }>mail data</a>
            <a href={ this.state.mailStrokes }>mail strokes</a>
        </div>;
    }
}

export default AppComponent;
