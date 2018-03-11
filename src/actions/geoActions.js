import { SAVE_STROKE_LOCATION_DATA } from './actionTypes';

export const saveStrokeLocationData = (geoData) => {

    type: SAVE_STROKE_LOCATION_DATA,
    geoData
}

export const saveStrokeLocation = (club) => (dispatch, getState) => {

    if(navigator && navigator.geolocation) {

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        //kick it into action hack
        navigator.geolocation.getCurrentPosition(function (){}, function (){}, options);
        navigator.geolocation.getCurrentPosition((pos) => {

            const crd = pos.coords;

            dispatch(saveStrokeLocationData(crd));

        }, (err) => {

            console.warn(`ERROR(${err.code}): ${err.message}`);

        }, options);//

    } else {

        console.log('no geo');
    }
};
