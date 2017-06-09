import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { curCourseFilter } from './../filters/curCourseFilter';
import { curGameFilter } from './../filters/curGameFilter'; 

import { selectHole } from './../actions/holeActions';

const CourseNavigator = ({ curGame, curCourse, selectHole }) => {

    return <div>
        <button className="btn btn--fill">{ `${ curGame && curGame.dateTime } ${ curCourse && curCourse.courseName }` }</button>
        <div style={{ display: 'block' }}>
            { curCourse && <ol className="layout layout--table list--plain">
                { curCourse && curCourse.holes.map((hole, idx) => <li className="cell cell--1-6 btn--club" key={idx}>
                    <button onClick={ () => selectHole(idx) } className="btn btn--fill">{ hole.label }</button>
                    </li>)
                }
                </ol>
            }
        </div>
    </div>;
}   

const actions = { selectHole };

const mapStateToProps = (state) => {

    return {
        curCourse: curCourseFilter(state),
        curGame: curGameFilter(state)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CourseNavigator);