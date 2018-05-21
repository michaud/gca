import React, { Component } from 'react';

import MarkerListContainer from 'components/player/MarkerListContainer';
import EditMarkerContainer from 'components/player/EditMarkerContainer';
import ScreenHeader from 'components/app/ScreenHeader';

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
            <ScreenHeader label="Courses">
                <button
                    className="btn--action f-btn--knob btn--add"
                    onClick={ this.addMarkerOpenClicked }>
                    <div className="btn--action__label">+</div>
                </button>
            </ScreenHeader>
            { this.state.addMarkerOpen &&
                <EditMarkerContainer/>
            }
            <MarkerListContainer/>
        </React.Fragment>;
    }
}

export default MarkersComponent;
