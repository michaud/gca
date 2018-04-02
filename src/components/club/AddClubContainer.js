import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    saveClub
} from 'actions/clubActionCreators';

import AddClubComponent from 'components/club/AddClubComponent';

const mapStateToProps = (state, ownProps) => {

    return {

    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveClub
}, dispatch))(AddClubComponent);
