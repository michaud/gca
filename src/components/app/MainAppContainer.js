import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    loadAppData
} from './../../actions/appActions';

import { strokeAdded } from './../../actions/gameActions';
import { createCourse, saveCourse } from './../../actions/gameActions';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {

    const {
        clubs,
        gameHoles,
        courses,
        games
    } = state;

    return {
        clubs,
        gameHoles,
        courses,
        games
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    loadAppData,
    strokeAdded,
    createCourse,
    saveCourse
}, dispatch))(AppComponent);
