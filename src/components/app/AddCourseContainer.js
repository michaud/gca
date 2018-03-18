import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddCourseComponent from './AddCourseComponent';

const mapStateToProps = (state) => {

    const {

    } = state;

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(AddCourseComponent);
