import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    saveMarker
} from 'actions/markerActionCreators';

import EditMarkerComponent from './EditMarkerComponent';

const mapStateToProps = (state, ownProps) => {

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveMarker
}, dispatch))(EditMarkerComponent);
