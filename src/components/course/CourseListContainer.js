import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseListComponent from './CourseListComponent';

const mapStateToProps = (state) => {

    const { courses } = state;

    return {
        courses
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
}, dispatch))(CourseListComponent);
