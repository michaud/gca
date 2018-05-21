import React from 'react';

const ScreenHeader = ({ label, children }) =>
    <h2 className="header--action">
        <span className="header--action__text">{ label }</span>
        { children }
    </h2>;

export default ScreenHeader;
