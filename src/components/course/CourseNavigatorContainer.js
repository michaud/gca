import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import CourseNavigatorComponent from 'components/course/CourseNavigatorComponent';

const mapStateToProps = (state) => {

    const { courses } = state;

    return {
        courses
    };
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({

}, dispatch))(CourseNavigatorComponent);
