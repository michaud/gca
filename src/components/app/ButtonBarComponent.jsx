import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import slide from 'components/transitions/slide';

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
            <NavLink className="btn--action f-btn--knob" to={{ pathname: '/settings/newgame', state: slide }}>
                <div className="btn--action__label">+</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: '/settings/games', state: slide }}>
                <div className="btn--action__label">Games</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: '/settings/courses', state: slide }}>
                <div className="btn--action__label">Courses</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: '/settings/bag', state: slide }}>
                <div className="btn--action__label">Bag</div>
            </NavLink>
            <NavLink className="btn--action wide" to={{ pathname: '/settings/players', state: slide }}>
                <div className="btn--action__label">Players</div>
            </NavLink>
            <NavLink className="btn--action f-btn--knob" to={{ pathname: '/', state: slide }}>
                <div className="btn--action__label">&lt;</div>
            </NavLink>
        </div>;
    }
}

export default ButtonBar;
