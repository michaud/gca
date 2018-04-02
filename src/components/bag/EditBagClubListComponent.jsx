import React, { Component } from 'react';

class EditBagClubListComponent extends Component {

    removeClubFromBag = (club) => {

        this.props.pullClubFromBag(club);
    }

    addClubToBag = (club) => {

        this.props.putClubInBag(club);
    }

    renderBagClubs = (bag, clubs) => {

        return bag.clubs.map((clubId, idx) => {
            const club = clubs.find((targetClub) => targetClub.id === clubId);
            return <li className="edit-club-list__item" key={ idx }><div className="edit-club-list__club-label">{ club.name }</div><button className="f-btn--knob btn--action" onClick={ () => this.removeClubFromBag(club) }>&gt;</button></li>;
        });
    }

    render () {

        const {
            clubs,
            bag
        } = this.props;

        return <div style={{ display: 'flex'}}>
            <div style={{ flex: 1, padding: '0 1rem' }}>
                <h3>bag</h3>
                <ul className="plain-list ">
                { this.renderBagClubs(bag, clubs) }
                </ul>
            </div>
            <div style={{ flex: 1, padding: '0 1rem 1rem 1rem' }}>
                <h3>clubs</h3>
                <ul className="plain-list">
                    { clubs.map((club, idx) => <li className="edit-club-list__item" key={ idx }><button disabled={ club.inBag } className="f-btn--knob btn--action" onClick={ () => this.addClubToBag(club) }>&lt;</button><div className="edit-club-list__club-label">{ club.name }</div></li>) }
                </ul>
            </div>
        </div>;
    }
}

export default EditBagClubListComponent;
