import React, { Component } from 'react';

import { playerData } from 'reducers/initialStates';

class EditMarkerComponent extends Component {

    state = {
        firstName: '',
        lastName: '',
        handicap: 0
    }

    firstNameChanged = (e) => {

        const value = e.target.value;

        this.setState((state) => ({
            ...state,
            firstName: value
        }));
    }

    lastNameChanged = (e) => {

        const value = e.target.value;

        this.setState((state) => ({
            ...state,
            lastName: value
        }));
    }

    handicapChanged = (e) => {

        const value = e.target.value;

        this.setState((state) => ({
            ...state,
            handicap: value
        }));
    }

    addMarkerButtonClicked = () => {

        this.props.saveMarker({...this.state });
        this.setState({ ...playerData });
    }

    render () {
        return <fieldset className="f-fieldset">
            <label className="f-label">
                <span className="f-label--text">first name</span>
                <input
                    className="f-input"
                    type="text"
                    onChange={ this.firstNameChanged }
                    placeholder="first name"
                    value={ this.state.firstName } />
            </label>
            <label className="f-label">
                <span className="f-label--text">last name</span>
                <input
                    className="f-input"
                    type="text"
                    onChange={ this.lastNameChanged }
                    placeholder="last name"
                    value={ this.state.lastName } />
            </label>
            <label className="f-label">
                <span className="f-label--text">handicap</span>
                <input
                    className="f-input"
                    type="text"
                    onChange={ this.handicapChanged }
                    placeholder="playing handicap"
                    value={ this.state.handicap } />
            </label>
            <button
                disabled={ this.state.firstName.length === 0 }
                onClick={ this.addMarkerButtonClicked }
                className="btn--action wide">
                <div className="btn--action__label">Add</div>
            </button>
        </fieldset>;
    }
}

export default EditMarkerComponent;
