export const loadAppData = () => {

    return (dispatch,getState) => {

        if ("geolocation" in navigator) {
        /* geolocation is available */
        } else {
        /* geolocation IS NOT available */
        }
    }
};
