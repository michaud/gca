import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cuid from 'cuid';

import {
    gameData
} from 'reducers/initialStates';

import {
    startingGame
} from 'actions/gameActionCreators';

import EditGameComponent from 'components/game/EditGameComponent';

const mapStateToProps = (state, ownProps) => {

    let game;

    const {
        courses,
        markers,
        player,
        games
    } = state;

    if(ownProps.gameId) {

        game = games.find((item) => item.id === ownProps.gameId);

    } else {

        game = {
            ...gameData,
            id: cuid()
        };
    }

    return {
        courses,
        markers,
        player,
        game
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    startingGame
}, dispatch))(EditGameComponent);
