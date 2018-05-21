import React, { Component } from 'react';

import CourseListContainer from 'components/course/CourseListContainer';
import EditCourseContainer from 'components/course/EditCourseContainer';
import ScreenHeader from 'components/app/ScreenHeader';
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
            <ScreenHeader label="Courses">
                <AddButtonComponent onClick={ this.addCourseClicked }/>
            </ScreenHeader>
            { this.state.addCourseOpen && <EditCourseContainer /> }
            <CourseListContainer />
        </React.Fragment>;
    }
}

export default AddCourseComponent;
