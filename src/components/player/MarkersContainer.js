import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import MarkersComponent from './MarkersComponent';

const mapStateToProps = (state, ownProps) => {

    const { markers } = state;

    return {
        markers
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(MarkersComponent);
