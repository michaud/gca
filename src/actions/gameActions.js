import { saveStrokeLocation } from 'actions/geoActions';

export const strokeAdded = (club) => {

    return (dispatch, getState) => {

        dispatch(saveStrokeLocation(club));
    }
};
