import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import HoleNavigatorComponent from './HoleNavigatorComponent';

const mapStateToProps = (state) => {

    const { games } = state;

    return {
        holes: []
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(HoleNavigatorComponent);
