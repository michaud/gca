import React, { Component } from 'react';

import AddCourseContainer from './AddCourseContainer';

export default class CourseNavigatorComponent extends Component {

    state = {
        courseListOpen: false,
        addCourseOpen: false
    }

    courseButtonClicked = () => {

        this.setState((state) => {

            const courseListOpen = !state.courseListOpen;
            return {
                courseListOpen,
                addCourseOpen: courseListOpen === false ? false : state.addCourseOpen
            };
        });
    }

    addCourseButtonClicked = () => {

        this.setState((state) => ({ addCourseOpen: !state.addCourseOpen }));
    }

    render () {

        const { courses } = this.props;

        return courses.length > 0 ? <div>
            <button className="btn--action panel--edit__btn wide" onClick={ this.courseButtonClicked }>Course name</button>
            <div
                className={ `panel--edit${
                    this.state.courseListOpen ? '' : ' collapsed'
                } `}>
                { this.state.courseListOpen && <button className="btn--action wide" onClick={ this.addCourseButtonClicked }>Add course</button> }
                { this.state.addCourseOpen && <AddCourseContainer /> }
                <div
                    className={ `panel--edit__content-container${
                        this.state.courseListOpen ? '' : ' hidden'
                    }` }>
                    <div className="panel--edit__content">
                        {courses && <ol>
                            {courses.map((course, idx) => <li key={idx}>{course.name}</li>)}
                        </ol>}
                    </div>
                </div>
            </div>
        </div>
        : <div>
            <button className="btn--action wide">Add course</button>
            <AddCourseContainer />
        </div>;
    }
}
