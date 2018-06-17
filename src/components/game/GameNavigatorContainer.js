import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import GameNavigatorComponent from 'components/game/GameNavigatorComponent';

const mapStateToProps = (state, ownProps) => {

    const { match: { params: { gameid }}} = ownProps;

    const { games } = state;

    const game = games.find((item) => {
        
        //return item.id === gameid;
        return item.id === 'cji8x4oag00033c5vr0taeocx';
    });

    return {
        game
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(GameNavigatorComponent);
