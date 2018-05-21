import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import GameListComponent from 'components/game/GameListComponent';

const mapStateToProps = (state) => {

    const { games } = state;

    return {
        games
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(GameListComponent);
