import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import EditBagClubListContainer from 'components/bag/EditBagClubListContainer';
import StrokesMap from 'components/map/StrokesMap';

import CourseListComponent from 'components/course/CourseListComponent';
import AddCourseContainer from 'components/course/AddCourseContainer';
import AddClubContainer from 'components/club/AddClubContainer';
import ClubListComponent from 'components/club/ClubListComponent';
import EditGameContainer from 'components/game/EditGameContainer';
import PlayerContainer from 'components/player/PlayerContainer';
import MarkerListContainer from 'components/player/MarkerListContainer';
import AddMarkerContainer from 'components/player/AddMarkerContainer';

const uiDefaultState = {
    addCourseOpen: false,
    courseListOpen: false,
    addClubOpen: false,
    clubListOpen: false,
    bagOpen: false,
    addHoleOpen: false,
    newGameOpen: false,
    playerOpen: false,
    markerListOpen: false,
    addMarkerOpen: false
};

injectTapEventPlugin();

class AppComponent extends Component {

    state = {
        path: [],
        mailData: 'mailto:michaud@venant.nl?body=',
        mailStrokes: 'mailto:michaud@venant.nl?body=',
        ...uiDefaultState
    }

    updatePath = (position) => {

        let path = [];

        if(this.state.path.length > 200) {
            path = this.state.path.slice(1, this.state.path.length - 1);
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
        });
    }

    watcherId = undefined;

    componentDidMount =() => {

        this.whatcherId = navigator.geolocation.watchPosition(this.updatePath);
    }

    getGeoMail = (data) => {
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: data }) }`;
    }

    getGeoStrokeMail = (data) => {// eslint-disable-line no-unused-vars
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: this.props.gameHoles[0].strokes}) }`;
    }

    addCourseClicked = () => {

        this.setState((state) => ({
            ...state,
            ...uiDefaultState,
            addCourseOpen: !state.addCourseOpen,
            courseListOpen: true
        }));
    }

    addClubClicked = () => {

        this.setState((state) => ({
            ...state,
            ...uiDefaultState,
            addClubOpen: !state.addClubOpen,
            clubListOpen: true
    }));
    }

    openClubListClicked = () => {

        this.setState((state) => {

            const clubListOpen = !state.clubListOpen;

            return {
                ...state,
                ...uiDefaultState,
                clubListOpen,
                addClubOpen: !clubListOpen ? false : state.addClubOpen
            };
        });
    }

    openBagClicked = () => {

        this.setState((state) => ({
            ...state,
            ...uiDefaultState,
            bagOpen: !state.bagOpen
        }));
    }

    selectCourseClicked = () => {

        this.setState((state) => {

            const courseListOpen = !state.courseListOpen;

            return {
                ...state,
                ...uiDefaultState,
                courseListOpen,
                addCourseOpen: !courseListOpen ? false : state.addCourseOpen
            };
        });
    }

    NewGameOpenClicked = () => {

        this.setState((state) => {

            return {
                ...state,
                ...uiDefaultState,
                newGameOpen: !state.newGameOpen
            };
        });
    }

    playerOpenClicked = () => {

        this.setState((state) => {

            return {
                ...state,
                ...uiDefaultState,
                playerOpen: !state.playerOpen
            };
        });
    }

    markerListOpenClicked = () => {

        this.setState((state) => {

            const markerListOpen = !state.markerListOpen;

            return {
                ...state,
                ...uiDefaultState,
                markerListOpen,
                addMarkerOpen: !markerListOpen ? false : state.addMarkerOpen
            };
        });
    }

    addMarkerOpenClicked = () => {

        this.setState((state) => {

            const addMarkerOpen = !state.addMarkerOpen;

            return {
                ...state,
                ...uiDefaultState,
                markerListOpen: addMarkerOpen ? true : state.markerListOpen,
                addMarkerOpen
            };
        });
    }

    render () {

        const {
            courses,
            clubs,
            bag
        } = this.props;

        return <div style={{ paddingBottom: '5rem' }}>
            <button
                className="btn--action wide"
                onClick={ this.NewGameOpenClicked }>
                New game
            </button>
            { this.state.newGameOpen &&
                <EditGameContainer/>
            }
            <div style={{ display: 'flex', position: 'fixed', bottom: 0, width: '100%' }}>
                <button
                    className="btn--action wide"
                    onClick={ this.playerOpenClicked }>
                    Player
                </button>
                { courses.length > 0 &&
                <button
                    className="btn--action wide"
                    onClick={ this.selectCourseClicked }>
                    Courses
                </button>
                }
                { clubs.length > 0 &&
                    <button
                        className="btn--action wide"
                        onClick={ this.openBagClicked }>Bag</button>
                }
                <button
                    className="btn--action wide"
                    onClick={ clubs.length === 0 ? this.addClubClicked : this.openClubListClicked }>Clubs</button>
                <button
                    className="btn--action wide"
                    onClick={ this.markerListOpenClicked }>
                    Markers
                </button>
            </div>
            { this.state.playerOpen &&
                <PlayerContainer/>
            }
            { (courses.length === 0 || this.state.courseListOpen) &&
                <h2 className="header--action">
                    <span className="header--action__text">Courses</span>
                    <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addCourseClicked }>+</button>
                </h2>
            }
            { this.state.addCourseOpen &&
                <AddCourseContainer />
            }
            { courses.length > 0 &&
                this.state.courseListOpen &&
                    <CourseListComponent
                        courses={ courses }
                        open={ this.state.courseListOpen }/>
            }
            { bag &&
                bag.clubs.length >= 0 &&
                this.state.bagOpen &&
                <EditBagClubListContainer/>
            }
            { this.state.clubListOpen &&
                <h2 className="header--action">
                    <span className="header--action__text">Clubs</span>
                    <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addClubClicked }>+</button>
                </h2>
            }
            { this.state.clubListOpen &&
                this.state.addClubOpen &&
                <AddClubContainer/>
            }
            { clubs.length > 0 &&
                this.state.clubListOpen &&
                <ClubListComponent clubs={ clubs } open={ this.state.clubListOpen }/>
            }
            { this.state.markerListOpen &&
                <h2 className="header--action">
                    <span className="header--action__text">Markers</span>
                    <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addMarkerOpenClicked }>+</button>
                </h2>
            }
            { this.state.markerListOpen &&
                this.state.addMarkerOpen &&
                <AddMarkerContainer/>
            }
            { this.state.markerListOpen &&
                <MarkerListContainer/>
            }
            {/* <StrokesMap isMarkerShown strokes={ gameHoles[0].strokes } />
            <StrokesMap isMarkerShown strokes={ this.state.path } />
            <div>
                <div>score</div>
                <ol>
                { gameHoles[0].strokes.map((stroke, idx) => <li key={ idx }>{ stroke.longitude } { stroke.latitude }</li>) }
                </ol>
            </div>
            <a href={ this.state.mailData }>mail data</a>
            <a href={ this.state.mailStrokes }>mail strokes</a> */}
        </div>;
    }
}

export default AppComponent;
