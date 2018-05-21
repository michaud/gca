import React from 'react';

const AddButtonComponent = ({ onClick }) => <button
    className="btn--action f-btn--knob btn--add"
    onClick={ onClick }>
    <div className="btn--action__label">+</div>
</button>;


export default AddButtonComponent;
