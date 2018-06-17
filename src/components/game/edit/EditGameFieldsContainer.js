import { connect } from 'react-redux';

import EditGameFieldsComponent from 'components/game/edit/EditGameFieldsComponent';

const mapStateToProps = (state, ownProps) => {

    let game;

    const {
        courses,
        markers,
        player,
        games
    } = state;

    if (ownProps.gameId !== undefined) {
        game = games.find((item) => {

            return item.id !== undefined && item.id === ownProps.gameId;
        });
    }

    return {
        courses,
        markers,
        player,
        game
    };
};

export default connect(mapStateToProps)(EditGameFieldsComponent);
