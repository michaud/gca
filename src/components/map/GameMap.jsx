import React, { Component } from 'react';

import StrokesMap from 'components/map/StrokesMap';

class GameMap extends Component {

    state = {
        path: [],
        mailData: 'mailto:michaud@venant.nl?body=',
        mailStrokes: 'mailto:michaud@venant.nl?body='
    }

    updatePath = (position) => {

        let path = [];

        if(this.state.path.length > 200) {
            path = this.state.path.slice(1, this.state.path.length - 1);
        } else {
            path = [...this.state.path];
        }

        const pathData = [...path, position.coords];
        const mailData = this.getGeoMail(pathData);
        const mailStrokes = this.getGeoStrokeMail(this.props.gameHoles[0].strokes);
        this.setState({
            path: pathData,
            mailData,
            mailStrokes
        });
    }

    watcherId = undefined;

    componentDidMount = () => {

        this.whatcherId = navigator.geolocation.watchPosition(this.updatePath);
    }

    getGeoMail = (data) => {
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: data }) }`;
    }

    getGeoStrokeMail = (data) => {// eslint-disable-line no-unused-vars
        return `mailto:michaud@venant.nl?body=${ JSON.stringify({ path: this.props.gameHoles[0].strokes}) }`;
    }

    render () {

        const { gameHoles } = this.props;

        return <React.Fragment>
            <StrokesMap isMarkerShown strokes={ gameHoles[0].strokes } />
            <StrokesMap isMarkerShown strokes={ this.state.path } />
            <div>
                <div>score</div>
                <ol>
                { gameHoles[0].strokes.map((stroke, idx) => <li key={ idx }>{ stroke.longitude } { stroke.latitude }</li>) }
                </ol>
            </div>
            <a href={ this.state.mailData }>mail data</a>
            <a href={ this.state.mailStrokes }>mail strokes</a>
        </React.Fragment>;
    }
}

export default GameMap;
