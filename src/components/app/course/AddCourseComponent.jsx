import React, { Component } from 'react';

import HoleEditComponent from './HoleEditComponent';

import { holeData } from 'reducers/initialStates';

export default class AddCourseComponent extends Component {

    state = {
        name: '',
        holes: []
    }

    courseNameChanged = (e) => {

        this.setState({ name: e.target.value });
    }

    addHole = (hole) => {

        this.setState((state) => {

            const holes = [...state.holes, hole];
            return { holes }
        });
    }

    addCourseButtonClicked = (e) => {

        this.props.saveCourse(this.state);
    }

    getNewHole = () => {

        return { ...holeData, holeNr: this.state.holes.length === 0 ? 1 : this.state.holes.length + 1 };
    }

    render () {

        return <div className="panel--edit">
            <div className="panel--edit__content-container">
                <div className="panel--edit__content">
                    <div className="panel--edit">
                        <div className="panel--edit__content-container">
                            <div className="panel--edit__content">
                                <fieldset className="f-fieldset">
                                    <label className="f-label">
                                        <span className="f-label-text">course name</span>
                                        <input
                                            className="f-input"
                                            type="text"
                                            onChange={ this.courseNameChanged }
                                            value={ this.state.name } />
                                    </label>
                                </fieldset>
                                <fieldset className="f-fieldset">
                                    <legend className="f-legend">holes</legend>
                                    { this.state.holes.map((hole, idx) => <HoleEditComponent key={ idx } hole={ hole }/>) }
                                    { this.state.holes.length < 18 && <HoleEditComponent hole={ this.getNewHole() } addHole={ this.addHole }/> }
                                </fieldset>
                                <button onClick={ this.addCourseButtonClicked } className="btn--action wide">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
