import React, { Component } from 'react';

import { clubData } from 'reducers/initialStates';

class AddClubComponent extends Component {

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
        this.setState({ ...clubData })
    }

    render () {

        return <div className="panel--edit">
        <div className="panel--edit__content-container">
            <div className="panel--edit__content">
                <div className="panel--edit">
                    <div className="panel--edit__content-container">
                        <div className="panel--edit__content">
                            <fieldset className="f-fieldset">
                                <label className="f-label">
                                    <span className="f-label-text">club name</span>
                                    <input
                                        className="f-input"
                                        type="text"
                                        placeholder="club name"
                                        onChange={ this.clubNameChanged }
                                        value={ this.state.name } />
                                </label>
                            </fieldset>
                            <fieldset className="f-fieldset">
                                <label className="f-edit">
                                    <div className="f-edit-input">
                                        <select value={ this.state.clubType } onChange={ this.clubTypeChanged }>
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
                                    </div>
                                </label>
                            </fieldset>
                            <button disabled={ this.state.name.length === 0 } onClick={ this.addClubButtonClicked } className="btn--action wide">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default AddClubComponent;
