import { addMarker } from 'actions/markerActions';

export const saveMarker = (marker) => (dispatch) => {

    dispatch(addMarker(marker));
};
