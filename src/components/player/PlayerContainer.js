import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import PlayerComponent from 'components/player/PlayerComponent';

const mapStateToProps = (state) => {

    const { player } = state;

    return {
        player
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(PlayerComponent);
