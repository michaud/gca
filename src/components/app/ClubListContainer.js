import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { strokeAdded } from 'actions/gameActions';

import ClubListComponent from './ClubListComponent';

const mapStateToProps = (state) => {

    const { clubs } = state;

    return {
        clubs
    }
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    strokeAdded
}, dispatch))(ClubListComponent);
