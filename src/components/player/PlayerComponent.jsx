import React, { Component } from 'react';

import ModuleHeader from 'components/app/ModuleHeader';

class PlayerComponent extends Component {

    state = {
        firstName: undefined,
        lastName: undefined,
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

    render () {

        return <React.Fragment>
            <ModuleHeader label="Player" screenheader={ true }/>
            <div className="f-fields-container">
                <ModuleHeader label="player info"/>
                <fieldset className="f-fieldset">
                    <label className="f-label">
                        <span className="f-label-text">first name</span>
                        <input
                            className="f-input"
                            type="text"
                            onChange={ this.firstNameChanged }
                            placeholder="first name"
                            value={ this.state.name } />
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
                </fieldset>
            </div>
        </React.Fragment>;
    }
}

export default PlayerComponent;
