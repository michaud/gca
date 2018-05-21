import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import ClubListComponent from './ClubListComponent';

const mapStateToProps = (state) => {

    const { clubs } = state;

    return {
        clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(ClubListComponent);
