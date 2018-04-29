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

        return <React.Fragment>
            <div className="fl-row fl-spread">
                <h3 className="bag-header">bag</h3>
                <h3 className="bag-header">clubs</h3>
            </div>
            <div className="fl-row fl-spread">
                    <ul className="plain-list bag-list">
                    { this.renderBagClubs(bag, clubs) }
                    </ul>
                    <ul className="plain-list bag-list">
                    { clubs.map((club, idx) => <li className="edit-club-list__item" key={ idx }><button disabled={ club.inBag } className="f-btn--knob btn--action" onClick={ () => this.addClubToBag(club) }>&lt;</button><div className="edit-club-list__club-label">{ club.name }</div></li>) }
                </ul>
            </div>
        </React.Fragment>;
    }
}

export default EditBagClubListComponent;
