import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveCourse } from 'actions/courseActionCreators';

import EditCourseComponent from 'components/course/EditCourseComponent';

const mapStateToProps = (state) => {

    const {

    } = state;

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveCourse
}, dispatch))(EditCourseComponent);
