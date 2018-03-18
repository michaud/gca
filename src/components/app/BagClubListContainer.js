import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { strokeAdded } from 'actions/gameActions';

import BagClubListComponent from './BagClubListComponent';

const mapStateToProps = (state) => {

    const { bag } = state;

    return {
        clubs: bag.clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    strokeAdded
}, dispatch))(BagClubListComponent);

