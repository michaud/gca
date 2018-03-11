import { saveStrokeLocation } from 'actions/geoActions';

export const strokeAdded = (club) => (dispatch, getState) => {

    dispatch(saveStrokeLocation(club));
};
