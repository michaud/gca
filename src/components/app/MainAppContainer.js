import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    loadAppData
} from 'actions/appActions';

import { strokeAdded } from 'actions/gameActions';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {
    const { clubs } = state;
    return {
        clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    loadAppData,
    strokeAdded
}, dispatch))(AppComponent);
