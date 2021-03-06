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
            return <li className="edit-club-list__item" key={ idx }>
                <div className="edit-club-list__club-label">{ club.name }</div>
                <button className="btn--action f-btn--knob" onClick={ () => this.removeClubFromBag(club) }>
                    <div className="btn--action__label">&gt;</div>
                </button>
            </li>;
        });
    }

    renderClubs = (clubs) => {
        return clubs.map((club, idx) => {
            return <li className="edit-club-list__item" key={ idx }>
                <button disabled={ club.inBag } className="f-btn--knob btn--action" onClick={ () => this.addClubToBag(club) }>
                    <div className="btn--action__label">&lt;</div>
                </button>
                <div className="edit-club-list__club-label">{ club.name }</div>
            </li>;
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
            <div className="fl-row fl-spread" style={{ marginBottom: '2rem'}}>
                    <ul className="plain-list bag-list">
                    { this.renderBagClubs(bag, clubs) }
                    </ul>
                    <ul className="plain-list bag-list">
                    { this.renderClubs(clubs) }
                </ul>
            </div>
        </React.Fragment>;
    }
}

export default EditBagClubListComponent;
