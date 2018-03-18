import React from 'react';

const ClubListComponent = ({ clubs, strokeAdded }) => {

    return clubs.length > 0 ?
    <div>
        <ol className="plain-list club-list">
            {clubs.map((club, idx) => <li key={ idx }><button className="btn--action wide" onClick={ strokeAdded }>{ club.name }</button></li>)}
        </ol>
        <div><button className="btn--action wide">Holed</button></div>
    </div>
    : <div><button className="btn--action wide">Add clubs</button></div>;

};

export default ClubListComponent;
