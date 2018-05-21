import React from 'react';

const MarkerListComponent = ({ markers }) => {

    return <ol className="plain-list item-list">
        { markers.map((marker, idx) =>
            <li className="list__item" key={idx}>
                <div className="list-item__container">
                    <div className="list-item__label">{ marker.firstName }</div>
                </div>
            </li>)
        }
    </ol>;
};

export default MarkerListComponent;
