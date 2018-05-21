import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    loadAppData
} from 'actions/appActions';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    loadAppData
}, dispatch))(AppComponent);
