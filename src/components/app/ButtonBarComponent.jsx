import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import slide from 'components/transitions/slide';
import scale from 'components/transitions/scale';

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

        return <div style={{ display: 'flex' }}>
            <NavLink className="btn--action wide" to={{ pathname: 'player', state: slide }}>
                <div className="btn--action__label">Player</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: 'courses', state: slide }}>
                <div className="btn--action__label">Courses</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: 'bag', state: slide }}>
                <div className="btn--action__label">Bag</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: 'clubs', state: slide }}>
                <div className="btn--action__label">Clubs</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: 'markers', state: slide }}>
                <div className="btn--action__label">Markers</div>
            </NavLink>
        </div>;
    }
}

export default ButtonBar;
