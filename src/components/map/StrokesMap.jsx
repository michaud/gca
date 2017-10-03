import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"

const StrokesMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyANxegeLo_lxopwKIgjVfvZsPwwX7T7qbE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap)((props) =>
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 51.9267587, lng: 4.4833616 }}>
            <Circle key={ 100000 } options={{
                fillColor: `#ffff00`,
                fillOpacity: 1,
                strokeWeight: 5,
                strokeColor: 'green',
                clickable: false,
                editable: false,
                zIndex: 1
            }} radius={1} center={{ lat: 51.9267587, lng: 4.4833616 }} />
            {props.isMarkerShown && props.strokes.map((stroke, idx) => <Circle key={ idx } options={{
                fillColor: `#ffff00`,
                fillOpacity: 1,
                strokeWeight: 5,
                strokeColor: 'green',
                clickable: false,
                editable: false,
                zIndex: 1
            }} radius={1} center={{ lat: stroke.latitude, lng: stroke.longitude }} />)}
        </GoogleMap>
    );

export default StrokesMap;