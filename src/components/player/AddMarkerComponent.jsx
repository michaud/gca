import React, { Component } from 'react';

import { playerData } from 'reducers/initialStates';

class AddMarkerComponent extends Component {

    state = {
        firstName: '',
        lastName: '',
        handicap: 0
    }

    firstNameChanged = (e) => {

        this.setState({ firstName: e.target.value });
    }

    lastNameChanged = (e) => {

        this.setState({ lastName: e.target.value });
    }

    handicapChanged = (e) => {
        this.setState({ handicap: e.target.value });
    }

    addMarkerButtonClicked = () => {

        this.props.saveMarker({...this.state });
        this.setState({ ...playerData });
    }

    render () {
        return <div className="panel--edit">
            <div className="panel--edit__content-container">
                <div className="panel--edit__content">
                    <fieldset className="f-fieldset">
                        <label className="f-label">
                            <span className="f-label-text">first name</span>
                            <input
                                className="f-input"
                                type="text"
                                onChange={ this.firstNameChanged }
                                placeholder="first name"
                                value={ this.state.firstName } />
                        </label>
                        <label className="f-label">
                            <span className="f-label-text">last name</span>
                            <input
                                className="f-input"
                                type="text"
                                onChange={ this.lastNameChanged }
                                placeholder="last name"
                                value={ this.state.lastName } />
                        </label>
                        <label className="f-label">
                            <span className="f-label-text">handicap</span>
                            <input
                                className="f-input"
                                type="text"
                                onChange={ this.handicapChanged }
                                placeholder="playing handicap"
                                value={ this.state.handicap } />
                        </label>
                        <button disabled={ this.state.firstName.length === 0 } onClick={ this.addMarkerButtonClicked } className="btn--action wide">Add</button>
                    </fieldset>
                </div>
            </div>
        </div>;
    }
}

export default AddMarkerComponent;
