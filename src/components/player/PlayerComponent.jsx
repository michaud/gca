import React, { Component } from 'react';

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
            <h2 className="header--action">
                <span className="header--action__text">Player</span>
            </h2>
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
        </React.Fragment>;
    }
}

export default PlayerComponent;
