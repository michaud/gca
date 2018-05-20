import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    loadAppData
} from 'actions/appActions';

import { createCourse, saveCourse } from 'actions/gameActions';

import { showStartup } from 'selectors';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {

    const {
        gameHoles,
        games
    } = state;

    return {
        gameHoles,
        games,
        showStartup: showStartup(state)
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    loadAppData
}, dispatch))(AppComponent);
