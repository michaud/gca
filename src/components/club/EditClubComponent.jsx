import React, { Component } from 'react';

import { clubData } from 'reducers/initialStates';

class EditClubComponent extends Component {

    state = {
        name: '',
        type: ''
    }

    clubNameChanged = (e) => {

        this.setState({ name: e.target.value });
    }

    clubTypeChanged = (e) => {

        this.setState({ type: e.target.value });
    }

    addClubButtonClicked = () => {

        this.props.saveClub({...this.state });
        this.setState({ ...clubData });
    }

    render () {

        return <fieldset className="f-fieldset">
            <label className="f-label">
                <span className="f-label-text">club name</span>
                <input
                    className="f-input"
                    type="text"
                    placeholder="club name"
                    onChange={ this.clubNameChanged }
                    value={ this.state.name } />
            </label>
            <label className="f-label">
                <span className="f-label-text">club type</span>
                <select className="f-select--new" value={ this.state.clubType } onChange={ this.clubTypeChanged }>
                    <option value="putter">Putter</option>
                    <option value="lobwedge">Lob wedge</option>
                    <option value="sandwegde">Sand wedge</option>
                    <option value="pitchingwedge">Pitching wedge</option>
                    <option value="gapwedge">Gap wedge</option>
                    <option value="iron">Iron</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="fairwaywood">Fairway wood</option>
                    <option value="driver">Driver</option>
                </select>
            </label>
            <button
                disabled={ this.state.name.length === 0 }
                onClick={ this.addClubButtonClicked }
                className="btn--action wide">
                <div className="btn--action__label">Add</div>
            </button>
        </fieldset>;
    }
}

export default EditClubComponent;
