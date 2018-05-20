import React from 'react';

import { NavLink } from 'react-router-dom';
import ButtonBarContainer from 'components/app/ButtonBarContainer';

const NavigationShell = ({ children }) => {

    return <React.Fragment>
        <NavLink className="btn--action wide" to="/newgame"><div className="btn--action__label">New game</div></NavLink>
        { children }
        <ButtonBarContainer/>
    </React.Fragment>;
};

export default NavigationShell;
