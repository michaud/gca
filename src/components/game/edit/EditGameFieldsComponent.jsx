import React, { Component } from 'react';

import moment from 'moment';

import EditCourseContainer from 'components/course/EditCourseContainer';
import EditMarkerContainer from 'components/player/EditMarkerContainer';

class EditGameFieldsComponent extends Component {

    dateTime = (strDateTime) => moment(strDateTime).format('YYYY-MM-DDThh:mm')

    state = {
        gameName: '',
        selectedCourse: -1,
        selectedMarker: -1,
        playerPlayingHandicap: 0,
        markerPlayingHandicap: '',
        gameDateTime: this.dateTime(),
        addCourseOpen: false,
        addMarkerOpen: false
    }

    gameDateTimeChanged = (dataTime) => {

        this.setState((state) => ({
            ...state,
            gameDateTime: this.dateTime(dataTime)
        }));
    }

    gameNameChanged = (e) => {

        const newGameName = e.target.value;

        this.setState((state) => ({
            ...state,
            gameName: newGameName
        }), () => {
            if(this.state.gameName && this.state.gameName.length > 0) {

                const {
                    gameName,
                    selectedCourse,
                    selectedMarker,
                    playerPlayingHandicap,
                    markerPlayingHandicap,
                    gameDateTime
                } = this.state;

                this.props.canSubmit(true, {
                    gameName,
                    selectedCourse,
                    selectedMarker,
                    playerPlayingHandicap,
                    markerPlayingHandicap,
                    gameDateTime
                 });
            }
        });
    }

    selectedCourseChanged = (e) => {

        const selectedCourse = e.target.value;

        this.setState((state) => ({
            ...state,
            selectedCourse
        }));
    }

    selectedMarkerChanged = (e) => {

        const selectedMarker = e.target.value;

        this.setState((state) => ({
            ...state,
            selectedMarker
        }));
    }

    playerPlayingHandicapChanged = (e) => {

        const playerPlayingHandicap = e.target.value;

        this.setState((state) => ({
            ...state,
            playerPlayingHandicap
        }));
    }

    markerPlayingHandicapChanged = (e) => {

        const markerPlayingHandicap = e.target.value;

        this.setState((state) => ({
            ...state,
            markerPlayingHandicap
        }));
    }

    addCourseClicked = () => {

        this.setState((state) => ({
            ...state,
            addCourseOpen: !state.addCourseOpen
        }));
    }

    addMarkerClicked = () => {

        this.setState((state) => ({
            ...state,
            addMarkerOpen: !state.addMarkerOpen
        }));
    }

    componentDidMount () {

        this.setState((state) => ({
            ...state,
            ...this.props.game
        }));
    }

    componentWillReceiveProps (nextProps) {

        if (this.props.courses.length !== nextProps.courses.length) {

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
                    <span className="f-label--text f-label--long">Game name</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={ this.gameNameChanged }
                        placeholder="Game name"
                        value={ this.state.gameName } />
                </label>
                <label className="f-label">
                    <span className="f-label--text f-label--long">Course</span>
                    <select
                        className="f-input-field f-select--new"
                        value={this.state.selectedCourse}
                        onChange={this.selectedCourseChanged}>
                        <option key={-1} value={-1}>new course</option>
                        {courses.map((course, idx) => {
                            return <option key={idx} value={course.id}>{course.name}</option>;
                        })
                        }
                    </select>
                    <button className="f-btn btn--action btn--trail" onClick={this.addCourseClicked}><div className="btn--action__label">new</div></button>
                </label>
            {this.state.addCourseOpen && <EditCourseContainer />}
                <label className="f-label">
                    <span className="f-label--text f-label--long">Playing handicap</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={this.playerPlayingHandicapChanged}
                        placeholder="player playing handicap"
                        value={this.state.playerPlayingHandicap} />
                </label>
                <label className="f-label">
                    <span className="f-label--text f-label--long">Marker</span>
                    <select className="f-input-field f-select--new" value={this.state.selectedMarker} onChange={this.selectedMarkerChanged}>
                        <option key={-1} value={-1}>No marker</option>
                        {
                            markers.map((marker, idx) => {
                                return <option key={idx} value={marker.id}>{marker.firstName}</option>;
                            })
                        }
                    </select>
                    <button className="f-btn btn--trail btn--action" onClick={this.addMarkerClicked}>
                        <div className="btn--action__label">new</div>
                    </button>
                </label>
            {this.state.addMarkerOpen && <EditMarkerContainer />}
                {this.state.selectedMarker !== -1 &&
                    <label className="f-label">
                        <span className="f-label--text f-label--long">Playing handicap</span>
                        <input
                            className="f-input-field f-input"
                            type="text"
                            onChange={ this.markerPlayingHandicapChanged }
                            placeholder="marker playing handicap"
                            value={ this.state.markerPlayingHandicap } />
                    </label>
                }
                <label className="f-label">
                    <span className="f-label--text f-label--long">Game date &amp; time</span>
                    field
                </label>
            </fieldset>
        </React.Fragment>;
    }
}

export default EditGameFieldsComponent;
