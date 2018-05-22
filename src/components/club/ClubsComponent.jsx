import React, { Component } from 'react';

import ClubListContainer from 'components/club/ClubListContainer';
import EditClubContainer from 'components/club/EditClubContainer';
import ModuleHeader from 'components/app/ModuleHeader';
import AddButtonComponent from 'components/app/AddButtonComponent';

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
            <ModuleHeader label="Clubs">
                <AddButtonComponent className="f-btn--header-knob" onClick={ this.addClubClicked }/>
            </ModuleHeader>
            { this.state.addClubOpen && <EditClubContainer/> }
            { clubs.length > 0 && <ClubListContainer/> }
        </React.Fragment>;
    }
}

export default ClubsComponent;
