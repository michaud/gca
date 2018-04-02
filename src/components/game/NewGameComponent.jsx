import React, { Component } from 'react';

class AddGameComponent extends Component {

    state = {
        selectedCourse: undefined,
        playingHandicap: 0
    }

    selectedCourseChanged = (e) => {

        this.setState({
            selectedCourse: e.target.value
        });
    }

    playingHandicapChanged = (e) => {

        this.setState({
            playingHandicap: e.target.value
        });
    }

    render () {

        const { courses } = this.props;

        return <div className="panel--edit">
            <div className="panel--edit__content-container">
                <div className="panel--edit__content">
                    <div className="panel--edit">
                        <div className="panel--edit__content-container">
                            <div className="panel--edit__content">
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
                                        <span className="f-label-text">Select course</span>
                                        <select className="f-select" value={ this.state.selectedCourse } onChange={ this.selectedCourseChanged }>
                                        { courses.map((course, idx) => {
                                            return <option key={ idx } value={ course.id }>{ course.name }</option>;
                                        }) }
                                        </select>
                                    </label>
                                    <label className="f-label">
                                        <span className="f-label-text">Playing handicap</span>
                                        <input
                                            className="f-input"
                                            type="text"
                                            onChange={ this.playingHandicapChanged }
                                            placeholder="playing handicap"
                                            value={ this.state.playingHandicap } />
                                    </label>
                                    <button
                                        className="btn--action panel--edit__btn wide"
                                        onClick={ this.AddGameOpenClicked }>
                                        Start game
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default AddGameComponent;
