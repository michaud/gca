import React, { Component } from 'react';

import EditClubContainer from 'components/club/EditClubContainer';
import EditBagClubListContainer from 'components/bag/EditBagClubListContainer';
import ModuleHeader from 'components/app/ModuleHeader';
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
            <ModuleHeader label="What's in the bag" screenheader={ true }/>
            <div className="f-fields-container">
                <EditBagClubListContainer/>
                <ModuleHeader label="Add club">
                    <AddButtonComponent className="f-btn--header-knob" onClick={ this.addClubClicked }/>
                </ModuleHeader>
                { this.state.addClubOpen && <EditClubContainer/> }
            </div>
        </React.Fragment>;
    }
}

