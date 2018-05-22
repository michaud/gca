import React from 'react';

const AddButtonComponent = ({ onClick, className = 'f-btn--knob' }) => <button
    className={ `btn--action ${ className } btn--add` }
    onClick={ onClick }>
    <div className="btn--action__label">+</div>
</button>;


export default AddButtonComponent;
