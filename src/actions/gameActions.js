import { saveStrokeLocation } from './geoActions';

export const strokeAdded = (club) => {

    return (dispatch, getState) => {

        dispatch(saveStrokeLocation(club));
    }
};
