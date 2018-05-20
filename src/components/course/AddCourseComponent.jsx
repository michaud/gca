import React, { Component } from 'react';

import CourseListContainer from 'components/course/CourseListContainer';
import EditCourseContainer from 'components/course/EditCourseContainer';

class AddCourseComponent extends Component {

    state = {
        addCourseOpen: false
    }

    addCourseClicked = () => {

        this.setState((state) => ({
            ...state,
            addCourseOpen: !state.addCourseOpen,
            courseListOpen: true
        }));
    }

    render () {

        const { } = this.props;

        return <React.Fragment>
            <h2 className="header--action">
                <span className="header--action__text">Courses</span>
                <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addCourseClicked }><div className="btn--action__label">+</div></button>
            </h2>
            { this.state.addCourseOpen && <EditCourseContainer /> }
            <CourseListContainer />
        </React.Fragment>;
    }
}

export default AddCourseComponent;
