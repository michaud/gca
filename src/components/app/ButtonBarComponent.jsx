import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

const uiDefaultState = {
    addCourseOpen: false,
    courseListOpen: false,
    addClubOpen: false,
    clubListOpen: false,
    bagOpen: false,
    addHoleOpen: false,
    newGameOpen: false,
    playerOpen: false,
    markerListOpen: false,
    addMarkerOpen: false
};

class ButtonBar extends Component {

    state = {
        path: [],
        mailData: 'mailto:michaud@venant.nl?body=',
        mailStrokes: 'mailto:michaud@venant.nl?body=',
        ...uiDefaultState
    }

    render () {

        const { courses, clubs } = this.props;

        return <div style={{ display: 'flex', position: 'fixed', bottom: 0, width: '100%' }}>
            <NavLink className="btn--action wide" to="player">
                <div className="btn--action__label">Player</div>
            </NavLink>
            <NavLink className="btn--action wide" to="courses">
                <div className="btn--action__label">Courses</div>
            </NavLink>
            <NavLink className="btn--action wide" to="bag">
                <div className="btn--action__label">Bag</div>
            </NavLink>
            <NavLink className="btn--action wide" to="clubs">
                <div className="btn--action__label">Clubs</div>
            </NavLink>
            <NavLink className="btn--action wide" to="markers">
                <div className="btn--action__label">Markers</div>
            </NavLink>
        </div>;
    }
}

export default ButtonBar;
