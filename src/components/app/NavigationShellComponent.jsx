import React from 'react';

import { NavLink } from 'react-router-dom';
import ButtonBarContainer from 'components/app/ButtonBarContainer';
import slide from 'components/transitions/slide';

const defaultStyle = { flex: 1, position: 'relative' };
const NavigationShell = (props) => {

    return <React.Fragment>
        <div style={ defaultStyle }>
            { props.children }
        </div>
        <ButtonBarContainer/>
    </React.Fragment>;
};

export default NavigationShell;
