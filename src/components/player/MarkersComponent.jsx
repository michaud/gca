import React, { Component } from 'react';

import MarkerListContainer from 'components/player/MarkerListContainer';
import AddMarkerContainer from 'components/player/AddMarkerContainer';

class MarkersComponent extends Component {

    state = {
        markerListOpen: false,
        addMarkerOpen: false
    }

    markerListOpenClicked = () => {

        this.setState((state) => {

            const markerListOpen = !state.markerListOpen;

            return {
                markerListOpen,
                addMarkerOpen: !markerListOpen ? false : state.addMarkerOpen
            };
        });
    }

    addMarkerOpenClicked = () => {

        this.setState((state) => {

            return {
                addMarkerOpen: !state.addMarkerOpen
            };
        });
    }

    render () {

        return <div>
            <button
                className="btn--action panel--edit__btn wide"
                onClick={ this.markerListOpenClicked }>
                Markers
            </button>
            { this.state.markerListOpen &&
                <MarkerListContainer />
            }
            { this.state.markerListOpen &&
                <button
                    className="btn--action wide"
                    onClick={ this.addMarkerOpenClicked }>Add marker</button>
            }
            { this.state.markerListOpen &&
                this.state.addMarkerOpen &&
                <AddMarkerContainer />
            }
        </div>;
    }
}

export default MarkersComponent;
