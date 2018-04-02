import React from 'react';

const MarkerListComponent = ({ markers }) => {
    console.log('markers: ', markers);

    return <div className="panel--edit">
        <div className="panel--edit__content">
            { markers && <ol className="plain-list player-list">
            { markers.map((marker, idx) =>
                <li className="player-list__item" key={idx}>
                    <div className="player-item">
                        <div className="player-item__label">{ marker.firstName }</div>
                    </div>
                </li>)}
            </ol>}
        </div>
    </div>;
};

export default MarkerListComponent;
