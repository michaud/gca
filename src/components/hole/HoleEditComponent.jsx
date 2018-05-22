import React, { Component } from 'react';

export default class HoleEditComponent extends Component {

    state = {
        par: 3,
        si: 1,
        length: 0
    }

    componentWillMount () {

        this.setState({ length: this.props.hole.length === undefined ? '' : this.props.hole.length });
    }

    componentWillReceiveProps (nextProps) {

        if(nextProps.hole.length === undefined) {

            this.setState({ length: 0 });
        }
    }

    parChanged = (e) => {

        this.setState({ par: e.target.value });
    }

    siChanged = (e) => {

        this.setState({ si: e.target.value });
    }

    lengthChanged = (e) => {

        this.setState({ length: e.target.value });
    }

    addHole = () => {

        this.props.addHole({
            ...this.props.hole,
            si: this.state.si,
            par: this.state.par,
            length: this.state.length === '' ? undefined : this.state.length
        });
    }

    render () {

        return <label className="f-edit">
            <div className="f-edit-input">
                <div className="f-edit-hole__nr">{ this.props.hole.holeNr }</div>

                <select className="f-select" value={ this.state.par } onChange={ this.parChanged }>
                    <option value="2">par 2</option>
                    <option value="3">par 3</option>
                    <option value="4">par 4</option>
                    <option value="5">par 5</option>
                    <option value="5">par 6</option>
                </select>
                <select className="f-select" value={ this.state.si } onChange={ this.siChanged }>
                    <option value="1">s.i. 1</option>
                    <option value="2">s.i. 2</option>
                    <option value="3">s.i. 3</option>
                    <option value="4">s.i. 4</option>
                    <option value="5">s.i. 5</option>
                    <option value="6">s.i. 6</option>
                    <option value="7">s.i. 7</option>
                    <option value="8">s.i. 8</option>
                    <option value="9">s.i. 9</option>
                    <option value="10">s.i. 10</option>
                    <option value="11">s.i. 11</option>
                    <option value="12">s.i. 12</option>
                    <option value="13">s.i. 13</option>
                    <option value="14">s.i. 14</option>
                    <option value="15">s.i. 15</option>
                    <option value="16">s.i. 16</option>
                    <option value="17">s.i. 17</option>
                    <option value="18">s.i. 18</option>
                </select>
                <input
                    type="text"
                    value={ this.state.length === 0 ? '' : this.state.length }
                    className="f-input f-input--length"
                    placeholder="length"
                    onChange={ this.lengthChanged }/>
            </div>
            { this.props.addHole && <button className="f-btn--knob btn--action btn--trail" onClick={ this.addHole }>
                <div className="btn--action__label">add</div>
            </button> }
        </label>;
    }
}
