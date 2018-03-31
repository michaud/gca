import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveCourse } from 'actions/courseActionCreators';

import AddCourseComponent from 'components/course/AddCourseComponent';

const mapStateToProps = (state) => {

    const {

    } = state;

    return {
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    saveCourse
}, dispatch))(AddCourseComponent);
