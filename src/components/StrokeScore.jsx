import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { curHoleFilter } from './../filters/curHoleFilter';

const StrokeScore = ({ curHole }) => {

    return <div className="layout">
        <button className="btn btn--club"><span>strokes: { curHole.strokes.length }</span>
        <span>stfd:2</span></button>
        <div>
            <ol className="layout list--plain">
                { curHole.strokes.map((stroke, idx)=> <li key={ idx } className="cell btn--club"><button className="btn btn--fill">{ stroke.club.name }</button></li>) }
            </ol>
        </div>
    </div>
}

const actions = {};

const mapStateToProps = (state) => {

    return {
        curHole: curHoleFilter(state)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StrokeScore);