import React, { Component } from 'react';

import CourseListContainer from 'components/course/CourseListContainer';
import EditCourseContainer from 'components/course/EditCourseContainer';
import ModuleHeader from 'components/app/ModuleHeader';
import AddButtonComponent from 'components/app/AddButtonComponent';

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
            <ModuleHeader label="Courses" screenheader={ true }>
                <AddButtonComponent className="f-btn--header-knob" onClick={ this.addCourseClicked }/>
            </ModuleHeader>
            { this.state.addCourseOpen && <EditCourseContainer /> }
            <CourseListContainer />
        </React.Fragment>;
    }
}

export default AddCourseComponent;
