import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseEditComponent from './CourseEditComponent';

class AddCourseComponent extends Component {

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

    render() {

        return <div className="panel--edit">
            <div className="panel--edit__content-container">
                <div className="panel--edit__content">
                    <button className="btn--action panel--edit__btn wide">new course</button>
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

const mapStateToProps = (state) => {
    
    const {

    } = state;

    return {
    };
};
    
export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(AddCourseComponent);
