import React from 'react';

const BagClubListComponent = ({ bagClubs, strokeAdded }) => {

    return <div>
        <h2>Bag</h2>
        <ol className="plain-list club-list">
            { bagClubs.map((club, idx) => <li key={ idx }>
                <button className="btn--action wide" onClick={ strokeAdded }>{ club.name }</button>
            </li>)}
        </ol>
    </div>;
};

export default BagClubListComponent;
