import React, { Component } from 'react';

import ModuleHeader from 'components/app/ModuleHeader';

class PlayerComponent extends Component {

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

    render () {

        return <React.Fragment>
            <ModuleHeader label="Player" screenheader={ true }/>
            <div className="f-fields-container">
                <ModuleHeader label="player info"/>
                <fieldset className="f-fieldset">
                    <label className="f-label">
                        <span className="f-label--text">first name</span>
                        <input
                            className="f-input"
                            type="text"
                            onChange={ this.firstNameChanged }
                            placeholder="first name"
                            value={ this.state.name } />
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
                            type="number"
                            onChange={ this.handicapChanged }
                            placeholder="playing handicap"
                            value={ this.state.handicap } />
                    </label>
                </fieldset>
            </div>
        </React.Fragment>;
    }
}

export default PlayerComponent;
