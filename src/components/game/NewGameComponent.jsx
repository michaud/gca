import React, { Component } from 'react';

import AddCourseContainer from 'components/course/AddCourseContainer';
import AddMarkerContainer from 'components/player/AddMarkerContainer';

class AddGameComponent extends Component {

    state = {
        selectedCourse: -1,
        selectedMarker: -1,
        playingHandicap: 0,
        addCourseOpen: false,
        addMarkerOpen: false
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

    playingHandicapChanged = (e) => {

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
                        className="f-select"
                        value={ this.state.selectedCourse }
                        onChange={ this.selectedCourseChanged }
                        defaultValue={ -1 }>
                        <option key={ -1 } value={ -1 }>new course</option>
                        {courses.map((course, idx) => {
                            return <option key={ idx } value={ course.id }>{ course.name }</option>;
                        })}
                    </select>
                    <button className="f-btn--knob btn--action btn--trail" onClick={ this.addCourseClicked }>add course</button>
                </label>
            </fieldset>
            {this.state.addCourseOpen && <AddCourseContainer />}
            <fieldset className="f-fieldset">
                <label className="f-label">
                    <span className="f-label-text">Playing handicap</span>
                    <input
                        className="f-input"
                        type="text"
                        onChange={ this.playingHandicapChanged }
                        placeholder="playing handicap"
                        value={ this.state.playingHandicap } />
                </label>
                <label className="f-label">
                    <span className="f-label-text">Marker</span>
                    <select className="f-select" value={ this.state.selectedMarker } onChange={ this.selectedMarkerChanged }>
                        <option key={ -1 } value={ -1 }>No marker</option>
                        {markers.map((marker, idx) => {
                            return <option key={ idx } value={ marker.id }>{ marker.firstName }</option>;
                        })}
                    </select>
                    <button className="f-btn--knob btn--trail btn--action" onClick={ this.addMarkerClicked }>add marker</button>
                </label>
            </fieldset>
            { this.state.addMarkerOpen && <AddMarkerContainer /> }
            <fieldset className="f-fieldset">
                { this.state.selectedMarker !== -1 &&
                    <label className="f-label">
                        <span className="f-label-text">Playing handicap</span>
                        <input
                            className="f-input"
                            type="text"
                            onChange={ this.playingHandicapChanged }
                            placeholder="playing handicap"
                            value={ this.state.playingHandicap } />
                    </label>
                }
                <button
                    className="btn--action panel--edit__btn wide"
                    onClick={ this.AddGameOpenClicked }>
                    Start game
                </button>
            </fieldset>
        </React.Fragment>;
    }
}

export default AddGameComponent;
