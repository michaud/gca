import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import ClubsComponent from './ClubsComponent';

const mapStateToProps = (state) => {

    const { clubs } = state;

    return {
        clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(ClubsComponent);
