import React, { Component } from 'react';

import EditClubContainer from 'components/club/EditClubContainer';
import EditBagClubListContainer from 'components/bag/EditBagClubListContainer';
import ScreenHeader from 'components/app/ScreenHeader';
import AddButtonComponent from 'components/app/AddButtonComponent';

export default class EditBagComponent extends Component {

    state = {
        addClubOpen: false
    }

    addClubClicked = () => {

        this.setState((state) => ({
            ...state,
            addClubOpen: !state.addClubOpen
        }));
    }

    render () {
        return <React.Fragment>
            <ScreenHeader label="What's in the bag"/>
            <EditBagClubListContainer/>
            <ScreenHeader label="Add club">
                <AddButtonComponent onClick={ this.addClubClicked }/>
            </ScreenHeader>
            { this.state.addClubOpen && <EditClubContainer/> }
        </React.Fragment>;
    }
}

