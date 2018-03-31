import React from 'react';

const CourseListComponent = ({ courses, open }) => {

    return <div className={ `panel--edit${ open ? '' : ' collapsed' } `}>
        <div className={ `panel--edit__content-container${ open ? '' : ' hidden' }` }>
            <div className="panel--edit__content">
                <h2>Courses</h2>
                {courses && <ol className="course-list">
                {courses.map((course, idx) => <li className="course-list__item" key={idx}>{ course.name }</li>)}
                </ol>}
            </div>
        </div>
    </div>;
};

export default CourseListComponent;
