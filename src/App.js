import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CourseNavigator from './components/CourseNavigator';
import HoleNavigator from './components/HoleNavigator';
import ClubScoreInput from './components/ClubScoreInput';
import StrokeScore from './components/StrokeScore';

export class App extends Component {

    render() {

        return (
            <div>
                <CourseNavigator/>
                <HoleNavigator/>
                <ClubScoreInput/>
                <StrokeScore/>
            </div>
        );
    }
}

const actions = {};

const mapStateToProps = (state) => {

    return {
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);