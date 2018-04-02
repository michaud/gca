import React from 'react';

const CourseListComponent = ({ courses }) => {

    return <div className="panel--edit">
        <div className="panel--edit__content">
            { courses && <ol className="plain-list course-list">
            { courses.map((course, idx) =>
                <li className="course-list__item" key={idx}>
                    <div className="course-item">
                        <div className="course-item__label">{ course.name }</div>
                        <button className="f-btn-add-hole btn--action">new game</button>
                    </div>
                </li>)}
            </ol>}
        </div>
    </div>;
};

export default CourseListComponent;
