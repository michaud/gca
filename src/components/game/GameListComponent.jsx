import React, { Component } from 'react';

class GameListComponent extends Component {

    componentDidMount () {

    }

    render () {

        const { games } = this.props;
        return <div>
        {
            games.map((game, idx)=> <div key={ `gamelistitem${ idx }` }>{game.gameName}</div>)
        }
        </div>;
    }
}

export default GameListComponent;
