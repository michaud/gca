import React, { Component } from 'react';

import AddCourseContainer from 'components/app/course/AddCourseContainer';
import CourseListComponent from 'components/app/course/CourseListComponent';

export default class CourseNavigatorComponent extends Component {

    state = {
        courseListOpen: false,
        addCourseOpen: false
    }

    selectCourseButtonClicked = () => {

        this.setState((state) => {

            const courseListOpen = !state.courseListOpen;
            const addCourseOpen = false;

            return {
                courseListOpen,
                addCourseOpen
            };
        });
    }

    addCourseButtonClicked = () => {

        this.setState((state) => ({
            addCourseOpen: !state.addCourseOpen,
            courseListOpen: true
        }));
    }

    render () {

        const { courses } = this.props;

        return <div>
            { courses.length > 0 && <button
                className="btn--action panel--edit__btn wide"
                onClick={ this.selectCourseButtonClicked }>Select Course</button> }
            { courses.length > 0 && <CourseListComponent courses={ courses } open={ this.state.courseListOpen }/> }
            { (courses.length === 0 || this.state.courseListOpen) && <button className="btn--action wide" onClick={ this.addCourseButtonClicked }>Add course</button> }
            { this.state.addCourseOpen && <AddCourseContainer /> }
        </div>;
    }
}
