import { ADD_COURSE } from 'actions/actionTypes';

export const addCourse = (course) => ({
    type: ADD_COURSE,
    course
});
