import React, { Component } from 'react';

import MarkerListContainer from 'components/player/MarkerListContainer';
import EditMarkerContainer from 'components/player/EditMarkerContainer';

class MarkersComponent extends Component {

    state = {
        addMarkerOpen: false
    }

    componentDidMount () {

        if(this.props.markers.length === 0) {

            this.setState((state) =>({
                ...state,
                addMarkerOpen: true
            }));
        }
    }

    addMarkerOpenClicked = () => {

        this.setState((state) => {

            const addMarkerOpen = !state.addMarkerOpen;

            return {
                ...state,
                addMarkerOpen
            };
        });
    }

    render () {

        const { } = this.props;

        return <React.Fragment>
            <h2 className="header--action">
                <span className="header--action__text">Markers</span>
                <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addMarkerOpenClicked }><div class="btn--action__label">+</div></button>
            </h2>
            { this.state.addMarkerOpen &&
                <EditMarkerContainer/>
            }
            <MarkerListContainer/>
        </React.Fragment>;
    }
}

export default MarkersComponent;
