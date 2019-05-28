import React, { Component } from 'react';

import MarkerListContainer from 'components/player/MarkerListContainer';
import EditMarkerContainer from 'components/player/EditMarkerContainer';
import ModuleHeader from 'components/app/ModuleHeader';
import AddButtonComponent from 'components/app/AddButtonComponent';

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
        <ModuleHeader label="Markers"></ModuleHeader>
            <div className="f-fields-container">
                { this.state.addMarkerOpen &&
                    <EditMarkerContainer/>
                }
                <MarkerListContainer/>
            </div>
        </React.Fragment>;
    }
}

export default MarkersComponent;
