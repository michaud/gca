import React, { Component } from 'react';

import ClubListContainer from 'components/club/ClubListContainer';
import EditClubContainer from 'components/club/EditClubContainer';
import ScreenHeader from 'components/app/ScreenHeader';
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
            <ScreenHeader label="Clubs">
                <AddButtonComponent onClick={ this.addClubClicked }/>
            </ScreenHeader>
            { this.state.addClubOpen && <EditClubContainer/> }
            { clubs.length > 0 && <ClubListContainer/> }
        </React.Fragment>;
    }
}

export default ClubsComponent;
