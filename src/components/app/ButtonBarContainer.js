import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import {
// } from 'actions/appActionCreators';

import ButtonBarComponent from 'components/app/ButtonBarComponent';

const mapStateToProps = (state) => {

    const {
        courses,
        clubs
    } = state;

    return {
        courses,
        clubs
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(ButtonBarComponent);
