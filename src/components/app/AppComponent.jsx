import React, { Component } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './../../scss/_style.scss';

import EditBagClubListContainer from 'components/bag/EditBagClubListContainer';
import StrokesMap from 'components/map/StrokesMap';
import CourseNavigatorContainer from 'components/course/CourseNavigatorContainer';
import CourseListComponent from 'components/course/CourseListComponent';
import AddCourseContainer from 'components/course/AddCourseContainer';
import AddClubContainer from 'components/club/AddClubContainer';
import ClubListComponent from 'components/club/ClubListComponent';
import NewGameContainer from 'components/game/NewGameContainer';
import PlayerContainer from 'components/player/PlayerContainer';
import MarkersComponent from 'components/player/MarkersComponent';

injectTapEventPlugin();

class AppComponent extends Component {

    state = {
        path: [],
        mailData: 'mailto:michaud@venant.nl?body=',
        mailStrokes: 'mailto:michaud@venant.nl?body=',
        courseListOpen: false,
        clubListOpen: false,
        bagOpen: false,
        addCourseOpen: false,
        addHoleOpen: false,
        addGameOpen: false,
        playerOpen: false
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
            addCourseOpen: !state.addCourseOpen,
            courseListOpen: true
        }));
    }

    addClubClicked = () => {

        this.setState((state) => ({
            addClubOpen: !state.addClubOpen,
            clubListOpen: true
        }));
    }

    openClubListClicked = () => {

        this.setState((state) => {

            const clubListOpen = !state.clubListOpen;

            return {
                clubListOpen: clubListOpen,
                addClubOpen: !clubListOpen ? false : state.addClubOpen
            };
        });
    }

    openBagClicked = () => {

        this.setState((state) => ({ bagOpen: !state.bagOpen }));
    }

    selectCourseClicked = () => {

        this.setState((state) => {

            const courseListOpen = !state.courseListOpen;

            return {
                courseListOpen,
                addCourseOpen: !courseListOpen ? false : state.addCourseOpen
             };
        });
    }

    AddGameOpenClicked = () => {

        this.setState((state) => {

            return {
                addGameOpen: !state.addGameOpen
            };
        });
    }

    playerOpenClicked = () => {

        this.setState((state) => {

            return {
                playerOpen: !state.playerOpen
            };
        });
    }

    render () {
        const {
            courses,
            clubs,
            bag
        } = this.props;

        return <div>
            <button
                className="btn--action panel--edit__btn wide"
                onClick={ this.AddGameOpenClicked }>
                New game
            </button>
            { this.state.addGameOpen &&
                <NewGameContainer/>
            }
            <button
                className="btn--action panel--edit__btn wide"
                onClick={ this.playerOpenClicked }>
                Player
            </button>
            { this.state.playerOpen &&
                <PlayerContainer/>
            }
            <CourseNavigatorContainer/>
            { courses.length > 0 &&
                <button
                    className="btn--action panel--edit__btn wide"
                    onClick={ this.selectCourseClicked }>
                    Courses
                </button>
            }
            { courses.length > 0 &&
                this.state.courseListOpen &&
                <CourseListComponent
                    courses={ courses }
                    open={ this.state.courseListOpen }/>
            }
            { (courses.length === 0 || this.state.courseListOpen) &&
                <button
                    className="btn--action wide"
                    onClick={ this.addCourseClicked }>
                    Add course
                </button>
            }
            { this.state.addCourseOpen && <AddCourseContainer /> }
            { clubs.length > 0 &&
                <button
                    className="btn--action wide"
                    onClick={ this.openBagClicked }>Bag</button>
            }

            { bag &&
                bag.clubs.length === 0 &&
                this.state.bagOpen &&
                <EditBagClubListContainer/>
            }

            { bag &&
                bag.clubs.length > 0 &&
                this.state.bagOpen &&
                <EditBagClubListContainer/>
            }
            { clubs.length === 0 &&
                <button
                    className="btn--action wide"
                    onClick={ this.addClubClicked }>Clubs</button>
            }
            { clubs.length > 0 &&
                <button
                    className="btn--action wide"
                    onClick={ this.openClubListClicked }>Clubs</button>
            }
            { clubs.length > 0 &&
                this.state.clubListOpen &&
                <ClubListComponent clubs={ clubs } open={ this.state.clubListOpen }/>
            }
            { clubs.length > 0 && this.state.clubListOpen &&
                <button
                    className="btn--action wide"
                    onClick={ this.addClubClicked }>Add clubs</button>
            }
            { this.state.clubListOpen &&
                this.state.addClubOpen &&
                <AddClubContainer />
            }
            <MarkersComponent/>
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
