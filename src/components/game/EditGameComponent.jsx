import React, { Component } from 'react';
import moment from 'moment';
import EditCourseContainer from 'components/course/EditCourseContainer';
import EditMarkerContainer from 'components/player/EditMarkerContainer';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Redirect } from 'react-router-dom';

import materialDataPickerStyle from 'components/muistyles';
import ScreenHeader from 'components/app/ScreenHeader';

const materialTheme = createMuiTheme(materialDataPickerStyle);

class EditGameComponent extends Component {

    dateTime = (strDateTime) => moment(strDateTime).format('YYYY-MM-DDThh:mm')

    state = {
        gameName: '',
        selectedCourse: -1,
        selectedMarker: -1,
        playerPlayingHandicap: 0,
        markerPlayingHandicap: '',
        gameDateTime: this.dateTime(),
        addCourseOpen: false,
        addMarkerOpen: false,
        startGame: false
    }

    gameDateTimeChanged = (dataTime) => {

        this.setState((state) => ({
            ...state,
            gameDateTime: this.dateTime(dataTime)
        }));
    }

    gameNameChanged = (e) => {

        const gameName = e.target.value;

        this.setState((state) => ({
            ...state,
            gameName
        }));
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

    startGameClicked = () => {

        this.props.startingGame(this.state);
        this.setState((state) => ({
            ...state,
            startGame: true
        }));
    }

    componentDidMount () {

        this.setState((state) => ({
            ...state,
            ...this.props.game,
            playerPlayingHandicap: this.props.player.handicap
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

        if(this.state.startGame) {
            return <Redirect to={ `/game/${ this.props.game.id }` }/>;
        }
        return <React.Fragment>
            <ScreenHeader label="Game"/>
            <fieldset className="f-fieldset">
                <label className="f-label">
                    <span className="f-label-text">Game title</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={ this.gameNameChanged }
                        placeholder="Game name"
                        value={ this.state.gameName } />
                </label>
                <label className="f-label">
                    <span className="f-label-text">Course</span>
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
                    <button className="f-btn--knob btn--action btn--trail" onClick={this.addCourseClicked}><div className="btn--action__label">new</div></button>
                </label>
            </fieldset>
            {this.state.addCourseOpen && <EditCourseContainer />}
            <fieldset className="f-fieldset">
                <label className="f-label">
                    <span className="f-label-text">Playing handicap</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={this.playerPlayingHandicapChanged}
                        placeholder="player playing handicap"
                        value={this.state.playerPlayingHandicap} />
                </label>
                <label className="f-label">
                    <span className="f-label-text">Marker</span>
                    <select className="f-input-field f-select--new" value={this.state.selectedMarker} onChange={this.selectedMarkerChanged}>
                        <option key={-1} value={-1}>No marker</option>
                        {markers.map((marker, idx) => {
                            return <option key={idx} value={marker.id}>{marker.firstName}</option>;
                        })}
                    </select>
                    <button className="f-btn--knob btn--trail btn--action" onClick={this.addMarkerClicked}>
                        <div className="btn--action__label">new</div>
                    </button>
                </label>
            </fieldset>
            {this.state.addMarkerOpen && <EditMarkerContainer />}
            <fieldset className="f-fieldset">
                {this.state.selectedMarker !== -1 &&
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
                    <span className="f-label-text">Game date &amp; time</span>
                    <MuiPickersUtilsProvider utils={ MomentUtils }>
                        <MuiThemeProvider theme={ materialTheme }>
                            <DateTimePicker
                                className="mui__f-box-input-container"
                                ampm={ false }
                                leftArrowIcon={ <ChevronLeftIcon/> }
                                rightArrowIcon={ <ChevronRightIcon/> }
                                showTabs={ false }
                                value={ this.state.gameDateTime }
                                onChange={ this.gameDateTimeChanged } />
                        </MuiThemeProvider>
                    </MuiPickersUtilsProvider>
                </label>
                <button
                    className="btn--action wide"
                    onClick={ this.startGameClicked }
                    disabled={ this.state.gameName.length === 0 }>
                    <div className="btn--action__label">Start game</div>
                </button>
            </fieldset>
        </React.Fragment>;
    }
}

export default EditGameComponent;
