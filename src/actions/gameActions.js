import { saveStrokeLocation } from 'actions/geoActions';

export const strokeAdded = (club) => (dispatch, getState) => {// eslint-disable-line no-unused-vars

    dispatch(saveStrokeLocation(club));
};
