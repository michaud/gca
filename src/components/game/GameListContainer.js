import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { } from 'actions/gameActions';

import GameListComponent from 'components/game/GameListComponent';

const mapStateToProps = (state) => {

    const { games } = state;

    return {
        games
    };
};

export default withRouter(connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(GameListComponent));
