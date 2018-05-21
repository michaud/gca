import { addCourse } from 'actions/courseActions';

export const saveCourse = (course) => (dispatch) => {

    dispatch(addCourse(course));
};
