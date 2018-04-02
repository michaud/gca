import React, { Component } from 'react';

import HoleEditComponent from 'components/hole/HoleEditComponent';

import {
    holeData,
    courseData
} from 'reducers/initialStates';

export default class AddCourseComponent extends Component {

    state = {
        ...courseData
    }

    courseNameChanged = (e) => {

        this.setState({ name: e.target.value });
    }

    addHole = (hole) => {

        this.setState((state) => {

            const holes = [...state.holes, hole];
            return { holes };
        });
    }

    addCourseButtonClicked = () => {

        this.props.saveCourse(this.state);
        this.setState({ ...courseData });
    }

    getNewHole = () => {

        return { ...holeData, holeNr: this.state.holes.length === 0 ? 1 : this.state.holes.length + 1 };
    }

    render () {

        return <div className="panel--edit">
            <div className="panel--edit__content-container">
                <div className="panel--edit__content">
                    <fieldset className="f-fieldset">
                        <label className="f-label">
                            <span className="f-label-text">course name</span>
                            <input
                                className="f-input"
                                type="text"
                                onChange={ this.courseNameChanged }
                                placeholder="course name"
                                value={ this.state.name } />
                        </label>
                        { this.state.holes.map((hole, idx) => <HoleEditComponent key={ idx } hole={ hole }/>) }
                        { this.state.holes.length < 18 && <HoleEditComponent hole={ this.getNewHole() } addHole={ this.addHole }/> }
                        <button disabled={ !this.state.name || this.state.name.length === 0 } onClick={ this.addCourseButtonClicked } className="btn--action wide">Add</button>
                    </fieldset>
                </div>
            </div>
        </div>;
    }
}
