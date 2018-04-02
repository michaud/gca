import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    saveMarker
} from 'actions/markerActionCreators';

import AddMarkerComponent from './AddMarkerComponent';

const mapStateToProps = (state, ownProps) => {

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveMarker
}, dispatch))(AddMarkerComponent);
