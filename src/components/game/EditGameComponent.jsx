import React, { Component } from 'react';

import AddCourseContainer from 'components/course/AddCourseContainer';
import AddMarkerContainer from 'components/player/AddMarkerContainer';

class EditGameComponent extends Component {

    state = {
        name: '',
        selectedCourse: -1,
        selectedMarker: -1,
        playerPlayingHandicap: 0,
        markerPlayingHandicap: '',
        gameDate: undefined,
        addCourseOpen: false,
        addMarkerOpen: false
    }

    courseNameChanged = (e) => {

        this.setState({
            name: e.target.value
        });
    }

    selectedCourseChanged = (e) => {

        this.setState({
            selectedCourse: e.target.value
        });
    }

    selectedMarkerChanged = (e) => {

        this.setState({
            selectedMarker: e.target.value
        });
    }

    playerPlayingHandicapChanged = (e) => {

        this.setState({
            playingHandicap: e.target.value
        });
    }

    markerPlayingHandicapChanged = (e) => {

        this.setState({
            playingHandicap: e.target.value
        });
    }

    addCourseClicked = () => {

        this.setState((state) => {

            return {
                ...state,
                addCourseOpen: !state.addCourseOpen
            };
        });
    }

    addMarkerClicked = () => {

        this.setState((state) => {

            return {
                ...state,
                addMarkerOpen: !state.addMarkerOpen
            };
        });
    }

    startGameClicked = () => {
        this.props.startingGame(this.state);
    }

    componentDidMount () {

        this.setState((state) => ({
            ...state,
            playerPlayingHandicap: this.props.player.handicap
        }));
    }

    componentWillReceiveProps (nextProps) {

        if(this.props.courses.length !== nextProps.courses.length) {

            const course = nextProps.courses.filter((addedCourse) => this.props.courses.indexOf(addedCourse) < 0);

            this.setState(() => ({
                addCourseOpen: false,
                selectedCourse: course[0].id
            }));
        }
    }

    render () {

        const {
            courses,
            markers
        } = this.props;

        return <React.Fragment>
            <fieldset className="f-fieldset">
                <label className="f-label">
                    <span className="f-label-text">Game title</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={ this.courseNameChanged }
                        placeholder="course name"
                        value={ this.state.name } />
                </label>
                <label className="f-label">
                    <span className="f-label-text">Course</span>
                    <select
                        className="f-input-field f-select--new"
                        value={ this.state.selectedCourse }
                        onChange={ this.selectedCourseChanged }>
                        <option key={ -1 } value={ -1 }>new course</option>
                        { courses.map((course, idx) => {
                            return <option key={ idx } value={ course.id }>{ course.name }</option>;
                        })
                        }
                    </select>
                    <button className="f-btn--knob btn--action btn--trail" onClick={ this.addCourseClicked }>new</button>
                </label>
            </fieldset>
            {this.state.addCourseOpen && <AddCourseContainer />}
            <fieldset className="f-fieldset">
                <label className="f-label">
                    <span className="f-label-text">Playing handicap</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={ this.playerPlayingHandicapChanged }
                        placeholder="player playing handicap"
                        value={ this.state.playerPlayingHandicap } />
                </label>
                <label className="f-label">
                    <span className="f-label-text">Marker</span>
                    <select className="f-input-field f-select--new" value={ this.state.selectedMarker } onChange={ this.selectedMarkerChanged }>
                        <option key={ -1 } value={ -1 }>No marker</option>
                        {markers.map((marker, idx) => {
                            return <option key={ idx } value={ marker.id }>{ marker.firstName }</option>;
                        })}
                    </select>
                    <button className="f-btn--knob btn--trail btn--action" onClick={ this.addMarkerClicked }>new</button>
                </label>
            </fieldset>
            { this.state.addMarkerOpen && <AddMarkerContainer /> }
            <fieldset className="f-fieldset">
                { this.state.selectedMarker !== -1 &&
                    <label className="f-label">
                        <span className="f-label-text">Playing handicap</span>
                        <input
                            className="f-input-field f-input"
                            type="text"
                            onChange={ this.markerPlayingHandicapChanged }
                            placeholder="marker playing handicap"
                            value={ this.state.markerPlayingHandicap } />
                    </label>
                }
                <label className="f-label">
                    <span className="f-label-text">Game date</span>
                    <input
                        className="f-input"
                        type="date"
                        onChange={ this.gameDateChanged }
                        placeholder="game date"
                        value={ this.state.date } />
                </label>
                <button
                    className="btn--action wide"
                    onClick={ this.startGameClicked }
                    disabled={ this.state.name.length === 0 }>
                    Start game
                </button>
            </fieldset>
        </React.Fragment>;
    }
}

export default EditGameComponent;
