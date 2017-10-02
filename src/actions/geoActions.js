export const saveStrokeLocation = (club) => {

    return (dispatch, getState) => {

        if(navigator && navigator.geolocation) {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            // const success = function (pos) {
            //     const crd = pos.coords;

            //     console.log('Your current position is:');
            //     console.log(`Latitude : ${crd.latitude}`);
            //     console.log(`Longitude: ${crd.longitude}`);
            //     console.log(`More or less ${crd.accuracy} meters.`);
            // };

            // const error = function (err) {
            //     console.warn(`ERROR(${err.code}): ${err.message}`);
            // };
            navigator.geolocation.getCurrentPosition(function (){}, function (){}, options);
            navigator.geolocation.getCurrentPosition((pos) => {
                const crd = pos.coords;

                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
            }, (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }, options);//
        } else {
            console.log('no geo');
        }

    }
}