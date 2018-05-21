import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    saveClub
} from 'actions/clubActionCreators';

import EditClubComponent from 'components/club/EditClubComponent';

const mapStateToProps = (state) => {

    const { clubs } = state;

    return {
        clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveClub
}, dispatch))(EditClubComponent);
