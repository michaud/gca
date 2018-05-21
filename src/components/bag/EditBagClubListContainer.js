import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 import {
     putClubInBag,
     pullClubFromBag
} from 'actions/clubActionCreators';

import EditBagClubListComponent from 'components/bag/EditBagClubListComponent';

const mapStateToProps = (state) => {

    const {
        clubs,
        bag
    } = state;
    return {
        clubs,
        bag
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    putClubInBag,
    pullClubFromBag
}, dispatch))(EditBagClubListComponent);
