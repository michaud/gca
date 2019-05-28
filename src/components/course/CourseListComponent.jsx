import React from 'react';

const CourseListComponent = ({ courses }) => {

    return <ol className="plain-list item-list">
        { courses.map((course, idx) =>
            <li className="list__item" key={idx}>
                <div className="course-item">
                    <div className="course-item__label">{ course.name }</div>
                    <button className="f-btn f-btn--line btn--trail btn--action">new game</button>
                </div>
            </li>)
        }
    </ol>;
};

export default CourseListComponent;
