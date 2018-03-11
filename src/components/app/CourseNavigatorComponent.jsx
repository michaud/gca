import React from 'react';

import AddCourseContainer from './AddCourseContainer';

const CourseNavigatorComponent = ({ courses }) => {

    return <div>
        <button className="btn--action panel--edit__btn wide">Course name</button>
        <div className="panel--edit collapsed">
            <div className="panel--edit__content-container hidden">
                <div className="panel--edit__content">
                    { courses && <ol>
                        { courses.map((course, idx) => <li key={ idx }>{ course.name }</li>) }
                    </ol> }
                </div>
                <AddCourseContainer/>
            </div>
        </div>
    </div>;
};

export default CourseNavigatorComponent;
