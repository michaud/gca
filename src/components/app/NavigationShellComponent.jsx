import React from 'react';

import ButtonBarContainer from 'components/app/ButtonBarContainer';

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
