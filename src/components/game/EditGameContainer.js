import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    startingGame
} from 'actions/gameActionCreators';

import EditGameComponent from 'components/game/EditGameComponent';

const mapStateToProps = (state, ownProps) => {

    const {
        courses,
        markers,
        player
    } = state;

    return {
        courses,
        markers,
        player
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    startingGame
}, dispatch))(EditGameComponent);
