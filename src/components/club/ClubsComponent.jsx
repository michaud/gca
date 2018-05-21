import React, { Component } from 'react';

import ClubListContainer from 'components/club/ClubListContainer';
import EditClubContainer from 'components/club/EditClubContainer';

class ClubsComponent extends Component {

    state = {
        addClubOpen: false
    }

    addClubClicked = () => {

        this.setState((state) => ({
            ...state,
            addClubOpen: !state.addClubOpen
        }));
    }

    componentDidMount () {

        if(this.props.clubs.length === 0) {

            this.setState((state) => ({
                ...state,
                addClubOpen: true
            }));
        }
    }

    render () {

        const { clubs } = this.props;

        return <React.Fragment>
            <h2 className="header--action">
                <span className="header--action__text">Clubs</span>
                <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addClubClicked }>
                    <div className="btn--action__label">+</div>
                </button>
            </h2>
            { this.state.addClubOpen && <EditClubContainer/> }
            { clubs.length > 0 && <ClubListContainer/> }
        </React.Fragment>;
    }
}

export default ClubsComponent;
