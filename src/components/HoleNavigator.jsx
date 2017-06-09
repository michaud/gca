import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { nextHole, prevHole } from './../actions/holeActions';
import { curHoleFilter } from './../filters/curHoleFilter';

const HoleNavigator =({ hole, nextHole, prevHole }) => {
    return <div className="hole-nav layout">
        <div className="cell cell--1-10"><button onClick={ prevHole } className="btn btn--fill">p</button></div>
        <div className="cell cell--8-10"><button className="btn btn--fill">
            <span>{ hole.label } </span>
            <span>par { hole.par } </span>
            <span>{ hole.distance } m</span>
        </button>
        </div>
        <div className="cell cell--1-10"><button onClick={ nextHole } className="btn btn--fill">n</button></div>
    </div>;
}

const actions = { nextHole, prevHole };

const mapStateToProps = (state) => {
    return {
        hole: curHoleFilter(state)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HoleNavigator);