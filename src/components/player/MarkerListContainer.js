import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import MarkerListComponent from './MarkerListComponent';

const mapStateToProps = (state, ownProps) => {

    const { markers } = state;
    console.log('markers: ', markers);
    return {
        markers
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(MarkerListComponent);
