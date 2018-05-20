import React, { Component } from 'react';

class GameNavigatorComponent extends Component {

    componentDidMount () {

        const { match: { params: { gameid }}} = this.props;
        console.log('gameid: ', gameid);

    }

    render () {

        return <div>Game</div>;
    }
}

export default GameNavigatorComponent;
