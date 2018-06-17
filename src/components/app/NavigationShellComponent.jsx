import React from 'react';

import ButtonBarContainer from 'components/app/ButtonBarContainer';

const defaultStyle = { flex: 1, position: 'relative' };

const NavigationShell = ({ children }) => {

    return <React.Fragment>
        <div style={ defaultStyle }>
            { children }
        </div>
        <ButtonBarContainer/>
    </React.Fragment>;
};

export default NavigationShell;
