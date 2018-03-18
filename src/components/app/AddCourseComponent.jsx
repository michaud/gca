import React, { Component } from 'react';

import CourseEditComponent from './CourseEditComponent';

export default class AddCourseComponent extends Component {

    state = {
        course: {
            name: undefined,
            holes: []
        }
    }

    addHole = (hole) => {

        const { course } = this.state;
        const newCourse = {
            ...course,
            holes: [...course.holes,
            hole]
        }
        this.setState({course: newCourse});
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
                                        <input className="f-input" type="text" value={ this.state.course.name } />
                                    </label>
                                </fieldset>
                                <fieldset className="f-fieldset">
                                    <legend className="f-legend">holes</legend>
                                    { this.state.course.holes.map((hole) => <CourseEditComponent hole={ hole }/>)}
                                    <CourseEditComponent addHole={ this.addHole }/>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
