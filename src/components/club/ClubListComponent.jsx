import React from 'react';

const ClubListComponent = ({ clubs }) => {

    return <div className={ `panel--edit${ open ? '' : ' collapsed' } `}>
        <div className={ `panel--edit__content-container${ open ? '' : ' hidden' }` }>
            <div className="panel--edit__content">
                <h2>Clubs</h2>

                { clubs &&
                    <ol className="course-list">
                    { clubs.map((club, idx) => <li className="course-list__item" key={idx}>{ club.name }</li>) }
                    </ol>
                }
            </div>
        </div>
    </div>;
};

export default ClubListComponent;
