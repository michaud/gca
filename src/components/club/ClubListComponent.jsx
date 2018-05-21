import React from 'react';

const ClubListComponent = ({ clubs }) => {

    return <ol className="plain-list item-list">
        { clubs.map((club, idx) =>
            <li className="list__item" key={idx}>
                <div className="list-item__container">
                    <div className="list-item__label">{ club.name }</div>
                </div>
            </li>)
        }
    </ol>;
};

export default ClubListComponent;
