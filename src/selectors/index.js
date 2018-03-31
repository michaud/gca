import { createSelector } from 'reselect';

const getCourses = (state) => state.courses;

export const showStartup = createSelector(
    getCourses,
    (courses) => courses.length === 0
);


