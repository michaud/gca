import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import NewGameComponent from 'components/game/NewGameComponent';

const mapStateToProps = (state, ownProps) => {

    const { courses } = state;

    return {
        courses
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(NewGameComponent);
