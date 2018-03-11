import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from 'actions/gameActions';

import CourseNavigatorComponent from './CourseNavigatorComponent';

const mapStateToProps = (state) => {

    const { courses } = state;
    console.log('courses: ', courses);

    return {
        courses
    }
};

export default connect(mapStateToProps, (dispatch) => bindActionCreators({
    
}, dispatch))(CourseNavigatorComponent);
