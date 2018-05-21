import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MarkerListComponent from './MarkerListComponent';

const mapStateToProps = (state) => {

    const { markers } = state;

    return {
        markers
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(MarkerListComponent);
