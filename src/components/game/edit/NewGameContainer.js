import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    startingGame
} from 'actions/gameActionCreators';

import NewGameComponent from 'components/game/edit/NewGameComponent';

const mapStateToProps = (state) => {

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
}, dispatch))(NewGameComponent);
