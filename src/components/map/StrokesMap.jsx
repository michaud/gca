import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"

const StrokesMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap)((props) =>
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 51.9267587, lng: 4.4833616 }}>
            {props.isMarkerShown && <Circle options={{
                fillColor: `#ffff00`,
                fillOpacity: 1,
                strokeWeight: 5,
                strokeColor: 'green',
                clickable: false,
                editable: false,
                zIndex: 1
            }} radius={1} center={{ lat: 51.9267587, lng: 4.4833616 }} />}
        </GoogleMap>
    );

export default StrokesMap;