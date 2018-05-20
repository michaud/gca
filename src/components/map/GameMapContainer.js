import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import GameMapComponent from './GameMapComponent';

const mapStateToProps = (state, ownProps) => {

    const { gameHoles } = state;

    return {
        gameHoles
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(GameMapComponent);
